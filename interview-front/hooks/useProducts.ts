"use client";

import clientAxios from "@/lib/axios/clientAxios";
import { Product } from "@/lib/types/product";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useProducts = ({
  isUpdateModalOpen,
  productId,
}: {
  isUpdateModalOpen?: boolean;
  productId?: number;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");
  const [product, setProduct] = useState<Product | null>(null);

  // Obtiene todos los productos
  const getProductsData = async () => {
    try {
      const response = await clientAxios.get("/products");
      setProducts(response.data);
      return response.data;
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      throw error;
    }
  };

  // Obtiene un producto por ID
  const getProductDataById = async () => {
    try {
      const response = await clientAxios.get<Product>(`/products/${productId}`);
      setProduct(response.data);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      throw error;
    }
  };

  // Crea un nuevo producto
  const createProduct = async (data: Product) => {
    try {
      const response = await clientAxios.post<Product>("/products", data);
      toast.success("Producto creado exitosamente"); // Mensaje de éxito
      await getProductsData();
      return response.data;
    } catch (error) {
      console.error("Error al crear el producto:", error);
      toast.error("Error al crear el producto"); // Mensaje de error
      throw error;
    }
  };

  // Actualiza un producto
  const updateProduct = async (id: number, data: Product) => {
    try {
      const response = await clientAxios.patch<Product>(`/products/${id}`, {
        ...data,
        isActive: data.isActive === "true" ? true : false,
      });
      toast.success("Producto actualizado exitosamente"); // Mensaje de éxito
      await getProductsData();
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      toast.error("Error al actualizar el producto"); // Mensaje de error
      throw error;
    }
  };

  // Actualiza el estado isActive de un producto
  const updateProductStatus = async (id: number, isActive: boolean) => {
    try {
      const response = await clientAxios.patch<Product>(`/products/${id}`, {
        isActive,
      });
      toast.success(
        `Producto ${isActive ? "activado" : "desactivado"} exitosamente`
      ); // Mensaje de éxito
      await getProductsData();
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el estado del producto:", error);
      toast.error("Error al actualizar el estado del producto"); // Mensaje de error
      throw error;
    }
  };

  // Elimina un producto
  const deleteProduct = async (id: number) => {
    try {
      const response = await clientAxios.delete(`/products/${id}`);
      toast.success("Producto eliminado exitosamente"); // Mensaje de éxito
      const record = await getProductsData();
      setProducts(record);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      toast.error("Error al eliminar el producto"); // Mensaje de error
      throw error;
    }
  };

  const sortProductsData = async (sortKey: string) => {
    try {
      const newSortOrder = sortOrder === "ASC" ? "DESC" : "ASC";
      setSortOrder(newSortOrder);
      const response = await clientAxios.get<Product[]>(
        `/products/sort/${sortKey}/${newSortOrder}`
      );
      setProducts(response.data);
      return response.data;
    } catch (error) {
      console.error("Error al ordenar los productos:", error);
      throw error;
    }
  };

  // Hook para cargar productos al inicio
  useEffect(() => {
    getProductsData();
    if (isUpdateModalOpen && productId) {
      getProductDataById();
    }
  }, [isUpdateModalOpen, productId]);

  return {
    products,
    product,
    getProductsData,
    getProductDataById,
    createProduct,
    updateProduct,
    updateProductStatus,
    deleteProduct,
    sortProductsData,
  };
};

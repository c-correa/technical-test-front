"use client";
import React, { useEffect, useState } from "react";
import Modal from "@/components/hero/Modal";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus, ArrowDownUp } from "lucide-react";
import Table from "@/components/hero/Table";
import { useProducts } from "../hooks/useProducts";
import Form from "@/components/hero/Form";
import { Product } from "@/lib/types/product";
import { FormProvider, useForm } from "react-hook-form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Home: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  const {
    products,
    product,
    sortProductsData,
    createProduct,
    deleteProduct,
    updateProduct,
    updateProductStatus,
  } = useProducts({ isUpdateModalOpen, productId: +productId! });

  const methods = useForm<Product>();
  useEffect(() => {
    if (productId !== null && product) {
      methods.setValue("name", product.name);
      methods.setValue("description", product.description);
      methods.setValue("price", product.price);
      methods.setValue("stock", product.stock);
      methods.setValue("isActive", product.isActive);
    }
  }, [productId, product, methods]);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const openDeleteModal = (id: number) => {
    setProductId(id);
    setIsDeleteModalOpen(true);
  };
  const openUpdateModal = (id: number) => {
    setProductId(id);
    setIsUpdateModalOpen(true);
  };

  const closeModals = () => {
    setIsCreateModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsUpdateModalOpen(false);
  };

  const handleSubmit = async (data: Product) => {
    if (isUpdateModalOpen) {
      await updateProduct(+productId!, { ...data });
    } else {
      await createProduct({ ...data });
    }
    closeModals();
  };

  const handleDelete = async () => {
    if (productId !== null) {
      await deleteProduct(+productId);
      setProductId(null);
      closeModals();
    }
  };

  const handleUpdateStatus = async (id: number, status: boolean) => {
    await updateProductStatus(id, status);
  };

  const headers = [
    <span className="flex items-center gap-2">
      Nombre
      <ArrowDownUp
        className="cursor-pointer"
        onClick={() => sortProductsData("name")}
      />
    </span>,
    <span className="flex items-center gap-2">
      Descripción
      <ArrowDownUp
        className="cursor-pointer"
        onClick={() => sortProductsData("description")}
      />
    </span>,
    <span className="flex items-center gap-2">
      Stock
      <ArrowDownUp
        className="cursor-pointer"
        onClick={() => sortProductsData("stock")}
      />
    </span>,
    <span className="flex items-center gap-2">
      Precio
      <ArrowDownUp
        className="cursor-pointer"
        onClick={() => sortProductsData("price")}
      />
    </span>,
    <span className="flex items-center gap-2">
      Estado
      <ArrowDownUp
        className="cursor-pointer"
        onClick={() => sortProductsData("isActive")}
      />
    </span>,
    "Acciones",
  ];

  const data = products.map((product) => ({
    Nombre: <span className="flex items-center gap-2">{product.name}</span>,
    Descripcion: <span>{product.description}</span>,
    Precio: <span>{product.price}</span>,
    Stock: <span>{product.stock}</span>,
    Estado: (
      <span
        onClick={() => handleUpdateStatus(+product.id, !product.isActive)}
        className={`${product.isActive ? "bg-green-500" : "bg-red-500"} cursor-pointer text-white px-2 py-1 rounded-md font-bold`}
      >
        {product.isActive ? "Activo" : "Inactivo"}
      </span>
    ),
    Acciones: (
      <div className="flex gap-2 ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={() => openUpdateModal(+product.id)}>
              <Pencil />
            </TooltipTrigger>
            <TooltipContent>Editar producto.</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={() => openDeleteModal(+product.id)}>
              <Trash2 className="text-red-500 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>Eliminar producto.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  }));

  return (
    <div className="w-full h-full p-10">
      <h1>Productos</h1>
      <div className="flex justify-end mb-4">
        <button
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md"
          onClick={openCreateModal}
        >
          <Plus /> Agregar Producto
        </button>
      </div>
      <Table headers={headers} data={data} />

      <Modal
        title={"Crear un Producto"}
        content={
          <FormProvider {...methods}>
            <Form
              isCreateModalOpen={isCreateModalOpen}
              onSubmit={handleSubmit}
            />
          </FormProvider>
        }
        isOpen={isCreateModalOpen}
        toggleModal={closeModals}
      />

      <Modal
        title={"Eliminar Producto"}
        content={
          <div>
            <h2>¿Estás seguro de eliminar este producto?</h2>
            <Button onClick={handleDelete}>Eliminar</Button>
          </div>
        }
        isOpen={isDeleteModalOpen}
        toggleModal={closeModals}
      />

      <Modal
        title={"Actualizar un Producto"}
        content={
          <FormProvider {...methods}>
            <Form
              isCreateModalOpen={isCreateModalOpen}
              onSubmit={handleSubmit}
            />
          </FormProvider>
        }
        isOpen={isUpdateModalOpen}
        toggleModal={closeModals}
      />
    </div>
  );
};

export default Home;

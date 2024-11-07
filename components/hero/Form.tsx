"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Product } from "@/lib/types/product";
import { InputSelect } from "../ui/InputSelect";
import { InputText } from "../ui/InputText";

interface FormProps {
  onSubmit: (data: Product) => void;
  isCreateModalOpen?: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmit, isCreateModalOpen }) => {
  const { control, handleSubmit } = useFormContext<Product>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <InputText placeHolder="Nombre" name="name" control={control} />
      <InputText placeHolder="Descripción" name="description" control={control} />
      <InputText placeHolder="Precio" name="price" control={control} />
      <InputText placeHolder="Stock" name="stock" control={control} />
      {
       !isCreateModalOpen && (
            <InputSelect name="isActive" control={control} options={[{label: 'Activo', value: 'true'}, {label: 'Inactivo', value: 'false'}]} />
          )
      }
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Guardar
      </button>
    </form>
  );
};

export default Form;

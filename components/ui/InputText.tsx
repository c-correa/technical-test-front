import { useEffect } from "react";
import { Controller, FieldErrorsImpl } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  width?: string;
  placeHolder: string;
  name: string;
  control: any;
  rows?: boolean;
  disabled?: boolean;
}

interface PropsContents {
  errors: Partial<FieldErrorsImpl<{
    [x: string]: any;
  }>>;
  name: string;
  rows: boolean;
  width: string;
  onChange: (...event: any[]) => void;
  value: any;
  placeHolder: string;
  disabled?: boolean;
}

const TextContent = ({
  errors,
  name,
  rows,
  onChange,
  value,
  width,
  placeHolder,
  disabled,
}: PropsContents) => {
  useEffect(() => {
    if (errors?.[name]?.message) {
      toast.error(`${errors[name].message}`);
    }
  }, [errors, name]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width,
        height: "80%",
        flexDirection: "column",
      }}
    >
      {!rows ? (
        <input
          type="text"
          style={{ width: "100%" }}
          className={`border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded p-2`}
          value={value}
          placeholder={placeHolder}
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <textarea
          style={{ width: "100%" }}
          className={`border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded p-2`}
          value={value}
          placeholder={placeHolder}
          onChange={onChange}
          rows={2}
          disabled={disabled}
        />
      )}
      {!!errors[name] && (
        <span className="text-red-500">{typeof errors[name]?.message === 'string' ? errors[name].message : ''}</span>
      )}
    </div>
  );
};

export const InputText = ({
  width = "100%",
  placeHolder,
  name,
  control,
  rows = false,
  disabled,
}: Props) => {
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({ field: { onChange, value = "" }, formState: { errors } }) => {
        return (
          <TextContent
            placeHolder={placeHolder}
            disabled={disabled}
            errors={errors}
            name={name}
            onChange={onChange}
            rows={rows}
            value={value}
            width={width}
          />
        );
      }}
    />
  );
};

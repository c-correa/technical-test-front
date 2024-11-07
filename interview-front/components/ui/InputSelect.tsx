import { useEffect } from "react";
import { Controller, FieldErrorsImpl } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  width?: string;
  name: string;
  control: any;
  options: Array<{ value: string | number; label: string }>; // New prop for select options
  disabled?: boolean;
}

interface PropsContents {
  errors: Partial<FieldErrorsImpl<{
    [x: string]: any;
  }>>;
  name: string;
  width: string;
  onChange: (...event: any[]) => void;
  value: any;
  options: Array<{ value: string | number; label: string }>; // New prop for select options
  disabled?: boolean;
}

const SelectContent = ({
  errors,
  name,
  onChange,
  value,
  width,
  options,
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
      <select
        style={{ width: "100%" }}
        className={`border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded p-2`}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="" disabled>{`Select ${name}`}</option> {/* Placeholder option */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {!!errors[name] && (
        <span className="text-red-500">{typeof errors[name]?.message === 'string' ? errors[name].message : ''}</span>
      )}
    </div>
  );
};

export const InputSelect = ({
  width = "100%",
  name,
  control,
  options,
  disabled,
}: Props) => {
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({ field: { onChange, value = "" }, formState: { errors } }) => {
        return (
          <SelectContent
            disabled={disabled}
            errors={errors}
            name={name}
            onChange={onChange}
            value={value}
            width={width}
            options={options} // Pass options to SelectContent
          />
        );
      }}
    />
  );
};

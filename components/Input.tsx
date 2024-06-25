import React, { FC } from "react";

interface IProps {
  placeholder: string;
  id: string;
  label: string;
  formData: any;
  handleChange: any;
  type?: string; // Add this line to include the type prop
}

const Input: FC<IProps> = ({
  placeholder,
  id,
  label,
  formData,
  handleChange,
  type = "text", // Default to "text" if type is not provided
}: IProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-gray-700 block text-sm font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={formData}
        onChange={handleChange}
        className="w-full rounded-full bg-border/50 px-6 py-3 text-sm placeholder:font-normal"
        required
      />
    </div>
  );
};

export default Input;

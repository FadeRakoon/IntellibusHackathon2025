import React from "react";

interface FormInputProps {
  type: "text" | "password" | "email";
  placeholder: string;
  icon: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, icon }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2/4 -translate-y-2/4">
        <i className={`${icon} text-gray-400`} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="py-3 pr-4 pl-12 w-full text-gray-600 rounded-lg border border-solid focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default FormInput;

import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  icon,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-2/4 -translate-y-2/4">{icon}</div>
      )}
      <input
        className={`py-3 pr-4 ${
          icon ? "pl-12" : "pl-4"
        } w-full text-gray-600 rounded-lg border border-solid ${
          error ? "border-red-300" : "border-gray-300"
        } ${className}`}
        {...props}
      />
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
};

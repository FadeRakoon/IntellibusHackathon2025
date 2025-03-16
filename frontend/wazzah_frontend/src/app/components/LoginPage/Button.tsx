import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isLoading = false,
  icon,
  fullWidth = true,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "py-4 font-medium rounded-lg transition-all cursor-pointer duration ease-[ease]";

  const variantClasses = {
    primary: "text-white bg-green-500",
    outline: "text-gray-700 bg-white border border-solid",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={isLoading}
      style={{
        opacity: isLoading ? "0.7" : "1",
      }}
      {...props}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="flex gap-3 justify-center items-center">
          {icon && icon}
          <span>{children}</span>
        </div>
      )}
    </button>
  );
};

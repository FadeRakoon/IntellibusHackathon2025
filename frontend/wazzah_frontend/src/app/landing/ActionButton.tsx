"use client";

import { ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  bgColor: string;
  shadowColor: string;
}

export const ActionButton = ({
  href,
  icon,
  label,
  bgColor,
  shadowColor,
}: ActionButtonProps) => {
  const baseClasses = `
    flex overflow-hidden relative flex-col items-center p-4 w-64 h-64
    transition-all duration-300 ease-in-out rounded-[50px]
    max-md:h-[220px] max-md:w-[220px]
    max-sm:w-full max-sm:h-[180px] max-sm:max-w-[280px]
  `;

  return (
    <a
      href={href}
      className={`${baseClasses} ${bgColor} ${shadowColor}`}
      onMouseEnter={(e: any) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = e.currentTarget.style.boxShadow
          .replace("8px", "12px")
          .replace("0.3)", "0.4)");
      }}
      onMouseLeave={(e: any) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = e.currentTarget.style.boxShadow
          .replace("12px", "8px")
          .replace("0.4)", "0.3)");
      }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out" />
      {icon}
      <span className="text-4xl font-medium text-black transition-transform duration-300 ease-in-out max-md:text-3xl max-sm:text-2xl">
        {label}
      </span>
    </a>
  );
};

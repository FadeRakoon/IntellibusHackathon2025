import * as React from "react";

interface ResponseBoxProps {
  height: number;
  width: number;
  variant:
    | "border-sky"
    | "bg-sky"
    | "border-green"
    | "bg-green"
    | "border-red"
    | "bg-red";
}

export const ResponseBox: React.FC<ResponseBoxProps> = ({
  height,
  width,
  variant,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "border-sky":
        return "border-2 border-solid border-sky-400 border-opacity-20";
      case "bg-sky":
        return "bg-sky-400 bg-opacity-20";
      case "border-green":
        return "border-2 border-solid border-green-300 border-opacity-20";
      case "bg-green":
        return "bg-green-300 bg-opacity-20";
      case "border-red":
        return "border-2 border-solid border-red-400 border-opacity-20";
      case "bg-red":
        return "bg-red-400 bg-opacity-20";
    }
  };

  return (
    <div
      className={`rounded ${getVariantClasses()}`}
      style={{ height: `${height}px`, width: `${width}px` }}
    />
  );
};

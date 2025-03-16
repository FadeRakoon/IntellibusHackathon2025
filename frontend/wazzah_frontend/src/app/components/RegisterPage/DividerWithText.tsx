import React from "react";

interface DividerWithTextProps {
  text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <div className="flex gap-4 items-center mx-0 my-4">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-sm text-gray-500">{text}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
};

export default DividerWithText;

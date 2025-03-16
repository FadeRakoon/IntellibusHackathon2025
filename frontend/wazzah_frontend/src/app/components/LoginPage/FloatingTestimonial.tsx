"use client";

import React from "react";

interface FloatingTestimonialProps {
  text: string;
  className?: string;
  animationDuration?: string;
}

export const FloatingTestimonial: React.FC<FloatingTestimonialProps> = ({
  text,
  className = "",
  animationDuration = "20s",
}) => {
  return (
    <div
      className={`absolute px-10 py-6 font-semibold bg-opacity-85 rounded-[30px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-zinc-800 ${className}`}
      style={{
        animation: `float ${animationDuration} infinite linear`,
      }}
    >
      &quot;{text}&quot;
    </div>
  );
};

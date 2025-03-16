import React from "react";

interface FloatingTestimonialProps {
  text: string;
  className?: string;
}

const FloatingTestimonial: React.FC<FloatingTestimonialProps> = ({
  text,
  className = "",
}) => {
  return (
    <blockquote
      className={`absolute px-10 py-6 font-semibold opacity-85 rounded-[30px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-zinc-800 ${className}`}
    >
      &quot;{text}&quot;
    </blockquote>
  );
};

export default FloatingTestimonial;

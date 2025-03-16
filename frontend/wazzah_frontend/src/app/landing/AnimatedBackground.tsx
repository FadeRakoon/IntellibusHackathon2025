"use client";

import { useState, useEffect } from "react";

interface Symbol {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

export const AnimatedBackground = () => {
  const [symbols, setSymbols] = useState<Symbol[]>(() =>
    Array(15)
      .fill(null)
      .map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 50 + 20,
        color: ["#39BF34", "#C032BB", "#2800F0"][Math.floor(Math.random() * 3)],
        speed: Math.random() + 0.5,
      }))
  );

  useEffect(() => {
    const moveSymbols = () => {
      setSymbols((prevSymbols) =>
        prevSymbols.map((s) => ({
          ...s,
          x: (s.x + s.speed) % 100,
          y: (s.y + s.speed / 2) % 100,
        }))
      );
    };

    const intervalId = setInterval(moveSymbols, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute inset-0 size-full">
      {symbols.map((symbol, index) => (
        <div
          key={index}
          className="absolute rounded-full -translate-x-2/4 -translate-y-2/4"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            width: `${symbol.size}px`,
            height: `${symbol.size}px`,
            background: symbol.color,
          }}
        />
      ))}
    </div>
  );
};

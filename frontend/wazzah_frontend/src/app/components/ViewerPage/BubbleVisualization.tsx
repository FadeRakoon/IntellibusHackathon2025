"use client";
import React from "react";

interface ConsensusGroup {
  count: number;
  x: number;
  y: number;
  color: string;
}

interface BubbleVisualizationProps {
  consensusGroups: Record<string, ConsensusGroup>;
}

export const BubbleVisualization: React.FC<BubbleVisualizationProps> = ({
  consensusGroups,
}) => {
  const getBubbleSize = (count: number): number => {
    return Math.max(60, Math.min(200, count * 50));
  };

  const getTextSize = (count: number, answer: string): number => {
    const bubbleSize = getBubbleSize(count);
    const textLength = (answer.length + 3) * 8;
    return Math.min(16, (bubbleSize / textLength) * 16);
  };

  const getBubbleStyle = (
    group: ConsensusGroup,
    count: number,
    answer: string
  ): React.CSSProperties => {
    const size = getBubbleSize(count);
    return {
      width: `${size}px`,
      height: `${size}px`,
      left: `${group.x}%`,
      top: `${group.y}%`,
      opacity: Math.min(1, count * 0.3 + 0.2),
      background: group.color,
      fontSize: `${getTextSize(count, answer)}px`,
      position: "absolute",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      cursor: "default",
      textAlign: "center",
      padding: "10px",
      wordBreak: "break-word",
    };
  };

  return (
    <section className="relative w-full max-w-[1200px] mt-8 bg-[rgba(248,249,250,0.6)] rounded-[12px] h-[500px] overflow-hidden">
      {Object.entries(consensusGroups).map(([answer, group]) => (
        <div
          key={answer}
          style={getBubbleStyle(group, group.count, answer)}
          className="select-none"
          role="presentation"
        >
          {answer} ({group.count})
        </div>
      ))}
    </section>
  );
};

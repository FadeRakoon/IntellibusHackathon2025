"use client";
import React, { useState, useCallback } from "react";
import { QuestionInput } from "./QuestionInput";
import { BubbleVisualization } from "./BubbleVisualization";
import { findSimilarAnswer } from "./utils/textUtils";

const BUBBLE_COLORS = [
  "rgba(150,206,180,0.2)",
  "rgba(69,183,209,0.2)",
  "rgba(255,107,107,0.2)",
  "rgba(67,24,209,0.2)",
];

interface ConsensusGroup {
  count: number;
  x: number;
  y: number;
  color: string;
}

export const ConsensusVisualizer: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [consensusGroups, setConsensusGroups] = useState<
    Record<string, ConsensusGroup>
  >({});

  const handleSubmit = useCallback(
    (userAnswer: string) => {
      const answer = userAnswer.toLowerCase().trim();
      const similarAnswer = findSimilarAnswer(answer, consensusGroups);

      setAnswers((prev) => [...prev, similarAnswer || answer]);

      setConsensusGroups((prev) => {
        if (similarAnswer) {
          return {
            ...prev,
            [similarAnswer]: {
              ...prev[similarAnswer],
              count: prev[similarAnswer].count + 1,
            },
          };
        }

        return {
          ...prev,
          [answer]: {
            count: 1,
            x: Math.random() * 60 + 20,
            y: Math.random() * 60 + 20,
            color:
              BUBBLE_COLORS[Object.keys(prev).length % BUBBLE_COLORS.length],
          },
        };
      });
    },
    [consensusGroups]
  );

  return (
    <main className="flex flex-col items-center font-[Inter] min-h-screen w-screen bg-[#fff] p-8">
      <QuestionInput onSubmit={handleSubmit} />
      <BubbleVisualization consensusGroups={consensusGroups} />
    </main>
  );
};

export default ConsensusVisualizer;

import * as React from "react";
import { ResponseBox } from "./ResponseBox";

interface ResponseGridProps {
  questionText: string;
}

export const ResponseGrid: React.FC<ResponseGridProps> = ({ questionText }) => {
  return (
    <section className="p-6 rounded-xl bg-gray-50 bg-opacity-60 max-sm:p-4">
      <h2 className="mb-8 text-xl font-bold text-black">Q1: {questionText}</h2>
      <h3 className="mb-6 text-base font-bold text-black">
        Individual Responses:
      </h3>
      <div className="flex flex-wrap gap-5 max-md:gap-4 max-sm:gap-2.5">
        <ResponseBox height={51} width={51} variant="border-sky" />
        <ResponseBox height={71} width={71} variant="bg-sky" />
        <ResponseBox height={25} width={25} variant="bg-green" />
        <ResponseBox height={47} width={47} variant="border-green" />
        <ResponseBox height={68} width={68} variant="bg-red" />
        <ResponseBox height={78} width={78} variant="bg-green" />
        <ResponseBox height={56} width={56} variant="border-sky" />
        <ResponseBox height={74} width={74} variant="border-green" />
        <ResponseBox height={49} width={49} variant="border-red" />
        <ResponseBox height={74} width={74} variant="border-green" />
      </div>
    </section>
  );
};

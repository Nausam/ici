"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "../ui/animated-number";

interface NumbersProps {
  number: number;
}

export function Numbers({ number }: NumbersProps) {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setValue(number);
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <AnimatedNumber
        className="inline-flex items-center mt-2 text-4xl font-bold text-white"
        springOptions={{
          bounce: 0,
          duration: 2000,
        }}
        value={value}
      />
    </div>
  );
}

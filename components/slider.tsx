"use client";
import * as React from "react";

interface SliderProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function Slider({ min, max, onChange }: SliderProps) {
  const [value, setValue] = React.useState<number>(1);

  return (
    <div className="flex gap-4">
      <input
        className="accent-yellow-300"
        type="range"
        min={min}
        max={max}
        value={value}
        step={1}
        onChange={(e) => {
          const updatedValue = Number(e.target.value);
          onChange(updatedValue);
          setValue(updatedValue);
        }}
      />
      <div>{value}</div>
    </div>
  );
}

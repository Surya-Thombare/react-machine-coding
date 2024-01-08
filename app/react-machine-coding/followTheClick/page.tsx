"use client";
import React, { useEffect, useRef, useState } from "react";

type Pos = {
  clientX: number;
  clientY: number;
};

export default function FollowTheLeader() {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  const handleClick = ({ clientX, clientY }: Pos) => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setPosition([clientX - width / 2, clientY - height / 2]);
    }
  };

  return (
    <div
      className="bg-gray-900 w-full m-8 h-3/4 overflow-hidden"
      onClick={handleClick}
    >
      <div
        className="box bg-green-400 h-7 w-7"
        ref={ref}
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}

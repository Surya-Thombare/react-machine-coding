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
    <div className="bg-gray-300 w-full m-8 h-3/4" onClick={handleClick}>
      <div
        className="box bg-yellow-300 h-6 w-6 "
        ref={ref}
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}

"use client";
import * as React from "react";
type pos = {
  clientX: number;
  clientY: number;
};

export default function FollowTheLeader() {
  const ref = React.useRef(document.createElement("div"));
  const [position, setPosition] = React.useState([0, 0]);

  const handleClick = ({ clientX, clientY }: pos) => {
    const { width, height } = ref.current.getBoundingClientRect();
    setPosition([clientX - width / 2, clientY - height / 2]);
  };

  return (
    <div className="bg-gray-300 h-96 w-96 m-8" onClick={handleClick}>
      <div
        className="box bg-yellow-300 h-5 w-5"
        ref={ref}
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}

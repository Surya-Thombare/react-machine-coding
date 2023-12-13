import React from "react";

const MIN = 0;
const MAX = 100;

const Progressbar = ({ value }) => {
  // Handle invalid values and convert them to be within [0, 100].
  const clampedValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="bg-slate-400 border-2 border-solid border-gray-400	h-[20px] overflow-hidden">
      <div
        className="bg-blue-700 h-full overflow-hidden text-center text-slate-100	"
        style={{ width: `${clampedValue}%` }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
      >
        {clampedValue}%
      </div>
    </div>
  );
};

export default Progressbar;

"use client";

import { useEffect, useState } from "react";

const CircularProgressBar = ({ progress, title }: any) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * 126;
    setOffset(progressOffset);
  }, [progress]);

  return (
    <div className="relative inline-block">
      <svg className="w-32 h-32" viewBox="0 0 36 36" fill="none">
        <circle
          className="stroke-current text-gray-200"
          cx="18"
          cy="18"
          r="15.91549430918954"
          strokeWidth="2"
        />
        <circle
          className="stroke-current text-[#FFDB5A]"
          cx="18"
          cy="18"
          r="15.91549430918954"
          strokeWidth="2"
          strokeDasharray="126"
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-[16px] font-semibold text-center text-white"
        >
          {title}
        </text>
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-sm font-normal text-center text-white"
        >
          Genious Score
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;

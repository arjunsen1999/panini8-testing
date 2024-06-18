"use client";
import React, { useEffect, useRef } from "react";

interface GaugeProps {
  value: number;
}

const Gauge: React.FC<GaugeProps> = ({ value }) => {
  const needleRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (needleRef.current) {
      const degree = value * 0.9;
      needleRef.current.style.transform = `rotate(${degree}deg)`;
    }
  }, [value]);

  return (
    <div className="flex items-center justify-center">
      <svg width="150" height="100" viewBox="0 0 200 100">
        <path
          d="M10 90 A80 80 0 0 1 190 90"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <path
          d="M10 90 A80 80 0 0 1 60 20"
          fill="none"
          stroke="red"
          strokeWidth="20"
        />
        <path
          d="M60 20 A80 80 0 0 1 140 20"
          fill="none"
          stroke="orange"
          strokeWidth="20"
        />
        <path
          d="M140 20 A80 80 0 0 1 190 90"
          fill="none"
          stroke="green"
          strokeWidth="20"
        />
        <circle cx="100" cy="90" r="5" fill="#000" />
        <line
          ref={needleRef}
          x1="100"
          y1="90"
          x2="80"
          y2="20"
          stroke="#000"
          strokeWidth="4"
          style={{
            transformOrigin: "100px 90px",
            transition: "all .5s ease all",
          }}
        />
      </svg>
    </div>
  );
};

export default Gauge;

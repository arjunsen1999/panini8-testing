import React from "react";
import DottedHr from "./Dottedhr";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]  m-2 bg-gray-200 rounded-full h-7">
        <div
          className=" bg-[#3cab7d] h-7 rounded-full transition-all duration-200"
          style={{ width: `${progress}%`, transition: "all .5s ease" }}
        >
          <p className="ml-2 font-bold text-white">{progress}%</p>
        </div>
        <DottedHr />
      </div>
    </div>
  );
};

export default ProgressBar;

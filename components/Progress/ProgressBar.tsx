import React from "react";
import Dottedhr from "./Dottedhr";

interface ProgressBarProps {
  progress: any;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex justify-center w-[90%]">
      <div className="w-[90%] flex flex-col gap-1  m-2 bg-gray-200 rounded-full h-7">
        <div className="flex px-[3px] gap-1 items-center">
          <div
            className="flex items-center bg-[#3cab7d] h-7 rounded-full transition-all duration-200"
            style={{ width: `${progress}%`, transition: "all .5s ease" }}
          ></div>
          <p className="ml-2 font-bold text-black">{progress}%</p>
        </div>

        <Dottedhr />
      </div>
    </div>
  );
};

export default ProgressBar;

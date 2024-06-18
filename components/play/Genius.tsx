import React from "react";
import Image from "next/image";
import Link from "next/link";
import Leader from "./Leader";
import Timer from "./Timer";
import Gauge from "./Gauge";
import { useSearchParams } from "next/navigation";
interface GeniusProps {
  minutes: string;
  per: string;
  marks: number;
}

const Genius: React.FC<GeniusProps> = ({ minutes, per, marks }) => {
  const params = useSearchParams();
  const playStatus = params.get("play");
  return (
    <div className="flex flex-col py-2 lg:p-6  max-lg:flex-row max-lg:justify-between   gap-6 max-lg:gap-2 ">
      <div className=" w-[300px] bg-white ">
        <div className="flex flex-col justify-center items-center gap-1 border-dotted border-2 border-grey-600 p-7 max-lg:p-2  ">
          <p>Genius Score:</p>
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex flex-col items-center justify-center  py-2">
              <Gauge value={marks} />
              <div className="mt-2">
                <p>Score: {marks}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-dotted border-2 border-grey-600 p-7 max-lg:hidden ">
          <p>
            Dear Ashani, you spent{" "}
            <span className="text-red-600">{minutes} minutes</span> practising
            today. Good work.
          </p>
        </div>
        <div className="border-dotted border-2 border-grey-600 p-7  max-lg:hidden">
          <h1 className="text-[#3cab7d]">Overview:</h1>
          <p>
            You are within top <span className="text-[#3cab7d]">{per}%</span>{" "}
            You are within top for the time begin
          </p>
        </div>
      </div>
      <Leader />
      {playStatus && <Timer />}
    </div>
  );
};

export default Genius;

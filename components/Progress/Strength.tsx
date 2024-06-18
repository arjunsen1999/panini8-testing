import React from "react";
import { Button } from "../ui/button";

const Strength = ({ strength }: any) => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]  bg-white">
        <h1 className="border-b-2 border-dashed border-gray-300 m-4 text-xl p-2 font-semibold ">
          Strength
        </h1>
        <div className="m-2 ">
          {strength &&
            strength.map((item: any, idx : number) => (
              <Button key={idx} className="bg-[#FFDB5A] text-white rounded-full m-1">
                {item}
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Strength;

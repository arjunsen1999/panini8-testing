import React from "react";
import { Button } from "../ui/button";

const Weekness = ({ weekness }: any) => {
  return (
    <div className="flex justify-center">
      <div className="w-[90%]  bg-white">
        <h1 className="border-b-2 border-dashed border-gray-300 m-4 text-xl p-2 font-semibold ">
          Weakness
        </h1>
        <div className="m-2 ">
          {weekness &&
            weekness.map((item: any, idx : number) => {
              if (item) {
                return (
                  <Button key={idx} className="bg-red-400 text-white rounded-full m-1">
                    {item}
                  </Button>
                );
              } else return;
            })}
        </div>
      </div>
    </div>
  );
};

export default Weekness;

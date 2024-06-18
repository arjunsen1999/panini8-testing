import React from "react";
interface StreProps {
  name: string;
  goal: string;
}

const Head: React.FC<StreProps> = ({ goal, name }) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-[90%]  bg-grey-100">
        <h1 className=" font-bold text-xl lg:text-3xl">
          Hi, {name}! Your Overall Progress for{" "}
          <span className="text-[#3cab7d]">{goal}</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Head;

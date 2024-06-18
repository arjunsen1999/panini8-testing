"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  module: string;
  diff: string;
  point: string;
  id: string;
};

const Playon: React.FC<CardProps> = ({ module, diff, point, id }) => {
  return (
    <div className="w-full m-6 max-lg:m-0 border-2 border-gray-300 border-dotted flex justify-center items-center">
      <div className="flex flex-col p-3 justify-center items-center gap-2">
        <Image
          className="max-sm:h-[100px] max-sm:w-[100px]"
          src={"/icons/question.png"}
          height={200}
          width={200}
          alt=""
        ></Image>
        <button className="bg-[#3cab7d] mt-1  text-white max-lg:w-[100px]  h-[40px] w-[140px] rounded-full max-sm:h-[30px] max-sm:w-[100px]">
          <Link
            className="flex justify-center gap-1 items-center"
            href={`?play=mcq&cid=${id}`}
          >
            Start
            <Image
              src={"/icons/start.png"}
              height={15}
              width={15}
              alt=""
            ></Image>
          </Link>
        </button>
        <p className="max-sm:text-xs">Module: {module}</p>
        <p className="max-sm:text-xs">Difficulty: {diff}</p>
        <p className="max-sm:text-xs text-[#3cab7d]">
          Points: {parseFloat(point).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Playon;

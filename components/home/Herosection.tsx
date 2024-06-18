"use client";
import { ChevronDown, ChevronRight, Play } from "lucide-react";
import React, { useState } from "react";
import hint from "../../public/icons/hint.svg";
import Image from "next/image";

interface QuestionData {
  title: string;
  options: string[];
}

interface HerosectionProps {
  questionData: QuestionData;
}

const Herosection: React.FC<HerosectionProps> = ({ questionData }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className=" relative w-4/5 sm:w-1/2 md:w-2/5 ">
      <div className="flex flex-col gap-3 justify-center items-center">
        <span className="text-black text-2xl text-center z-10">{`{ Is Your Brain Open? }`}</span>
        <span className="text-sm font-medium text-[#706D6D] w-2/3 text-center mx-auto z-10">
          Make Learning Fun with Interactive Quizzes That Help You Master
          Concepts Every Day!
        </span>
        <button className="text-white bg-[#59B792] gap-2 items-center text-sm px-3 flex rounded-full p-2 w-fit z-10">
          <Play size={20} />
          Start a quiz
        </button>
        <div className="flex flex-col rounded-lg p-3 gap-2 w-full bg-white  home-bg">
          <button className="text-white bg-[#59B792] gap-2 items-center text-sm px-4 p-2 flex rounded-full w-fit">
            IQOM
          </button>
          <span className="text-black text-xl font-medium">
            {questionData.title}
          </span>
          <span className="text-[#706D6D] text-sm font-medium">
            Select any one option
          </span>
          <div className="flex flex-col gap-2 ">
            {questionData.options.map((option, index) => (
              <div
                key={index}
                className="flex gap-2 w-full rounded-lg p-1 border border-[#d9d9d9] "
              >
                <label className="inline-flex items-center cursor-pointer w-full">
                  <input
                    type="radio"
                    name="quiz-option"
                    className="hidden"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  <span
                    className={`w-4 h-4 p-[1px] inline-block rounded-full border-2 transition duration-200 ease-in-out ${
                      selectedOption === option
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-[#706D6D]"
                    }`}
                  >
                    {selectedOption === option && (
                      <svg
                        className="w-3 h-3 text-white mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    )}
                  </span>
                  <span className="text-black text-[16px] font-medium ml-2">
                    {option}
                  </span>
                </label>
              </div>
            ))}
            <div className="flex w-full justify-between">
              <button className="text-black font-medium bg-[#FFDB5A] gap-2 items-center text-sm px-3 flex rounded-full p-2 w-fit">
                <Image alt="Hint" src={hint} className="" />
                Hint
                <ChevronDown size={18} />
              </button>
              <button className="text-white bg-[#59B792] gap-2 items-center text-sm px-3 flex rounded-full p-2 w-fit">
                check
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;

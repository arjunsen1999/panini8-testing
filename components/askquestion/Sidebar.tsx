"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  LoaderCircle,
  MessageCircleQuestion,
  ChevronUp,
  ScrollText,
  Play,
  AlignJustify,
  CircleHelp,
} from "lucide-react";
import CircularProgressBar from "./CircularProgressBar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = ({ setActiveIndex, activeIndex }: any) => {
  const progress = 55;
  const title = "47";
  const pathname = usePathname();
  return (
    <div className="bg-[#59B792] min-h-screen flex h-full flex-col gap-5 py-4 w-full ">
      <div className="flex justify-between items-center px-4">
        <Image
          width={1000}
          height={1000}
          alt=""
          src={"/icons/logo.png"}
          className="h-10 w-10"
        />
        <ChevronLeft className="text-white cursor-pointer" />
      </div>
      <div className="flex justify-center ">
        <CircularProgressBar progress={progress} title={title} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Link
          href={"/progress"}
          className={`px-4 flex gap-2 justify-between cursor-pointer text-white w-full py-2 ${
            pathname.includes("/progress") && "bg-white text-[#59B792]"
          }`}
        >
          <div className="flex justify-start gap-3">
            <LoaderCircle
              className={`${
                pathname.includes("/progress") && "text-[#59B792]"
              }`}
            />
            <span
              className={`${
                pathname.includes("/progress") && "text-[#59B792]"
              }`}
            >
              Progress
            </span>
          </div>
          {pathname.includes("/progress") ? (
            <ChevronUp
              className={`${
                pathname.includes("/progress") && "text-[#59B792]"
              }`}
            />
          ) : (
            <ChevronDown
              className={`${
                pathname.includes("/progress") && "text-[#59B792]"
              }`}
            />
          )}
        </Link>
        <Link
          href={"/askquestion"}
          className={`px-4 flex gap-2 justify-between cursor-pointer text-white w-full py-2 ${
            pathname.includes("/askquestion") && "bg-white text-[#59B792]"
          }`}
        >
          <div className="flex justify-start gap-3">
            <MessageCircleQuestion
              className={`${
                pathname.includes("/askquestion") && "text-[#59B792]"
              }`}
            />
            <span
              className={`${
                pathname.includes("/askquestion") && "text-[#59B792]"
              }`}
            >
              Ask A Question
            </span>
          </div>
          {activeIndex === 2 ? (
            <ChevronUp
              className={`${
                pathname.includes("/askquestion") && "text-[#59B792]"
              }`}
            />
          ) : (
            <ChevronDown
              className={`${
                pathname.includes("/askquestion") && "text-[#59B792]"
              }`}
            />
          )}
        </Link>


        {(pathname.includes("/askquestion/add-question") || pathname.includes("/askquestion/question-details")) &&  (
          <div className="flex flex-col gap-3 items-start p-2 pl-14">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 cursor-pointer">
                <ScrollText className="text-white" />
                <span className="text-[16px] text-white font-normal">Feed</span>
              </div>
              <div className="flex gap-2 cursor-pointer">
                {/* <HelpOutlineIcon className="text-white" /> */}
                <Image alt="question" src={"/icons/question.svg"} width={20} height={20} className="h-6 w-6"/>
                <span className="text-[16px] text-white font-normal">
                  My Questions
                </span>
              </div>
            </div>
          </div>
        )}


        <div
          className={`px-4 flex gap-2 justify-between cursor-pointer text-white w-full py-2 ${
            pathname.includes("/text-center") && "bg-white text-[#59B792]"
          }`}
        >
          <div className="flex justify-start gap-3 items-center">
            <Image
              alt=""
              width={10}
              height={10}
              className="text-[#59B792] w-fit h-fit"
              src={"/icons/testcenter.png"} //////////////////////
            />
            <span
              className={`${
                pathname.includes("/text-center") && "text-[#59B792]"
              } `}
            >
              Test Center
            </span>
          </div>
          <div></div>
        </div>
      </div>


    </div>
  );
};

export default Sidebar;

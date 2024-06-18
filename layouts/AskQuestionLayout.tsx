"use client";
import Sidebar from "@/components/askquestion/Sidebar";
import {
  AlignJustify,
  ChevronDown,
  CircleHelp,
  LoaderCircle,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

export default function AskQuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="bg-[#f3f5f9] w-full flex relative">
      <div className="w-[20%] hidden md:inline sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] flex flex-col max-h-screen overflow-y-auto">
        <nav className="w-full h-fit flex justify-end py-3 px-6 gap-5 items-center bg-white relative">
          <span className="text-lg text-stroke  cursor-pointer hidden md:flex">
            Play
          </span>
          <span className="text-[#59B792] text-lg font-medium cursor-pointer hidden md:flex">
            Progress
          </span>
          <Link
            href={"/more"}
            className=" hidden md:flex gap-2 text-[#292828] font-medium cursor-pointer"
          >
            <span className="font-medium">More</span>
            <ChevronDown />
          </Link>
          <Image
            alt=""
            width={10}
            height={10}
            src={"/icons/logo.png"}
            className="rounded-full cursor-pointer absolute left-4 flex md:hidden h-6 w-6"
          />
          <Image
            width={1000}
            height={1000}
            alt=""
            src={"/icons/avatar.png"}
            className="rounded-full cursor-pointer h-10 w-10"
          />
        </nav>
        <Suspense>{children}</Suspense>

        {/* /////////////////// */}
        <div className="bg-white w-full flex md:hidden justify-between p-3 px-8 fixed bottom-0 left-0 ">
          <Link
            className="flex gap-1 flex-col justify-center items-center"
            // onClick={() => setActiveIndex(0)}
            href={"/play"}
          >
            <div
              className={`${
                pathname.includes("/play") ? "bg-[#59B792]" : "bg-[#d9d9d9]"
              } rounded-full`}
            >
              <Play className="text-white m-2" />
            </div>
            <span className="text-black text-sm">Play</span>
          </Link>
          <Link
            href={"/progress"}
            className="flex gap-1 flex-col justify-center items-center"
            // onClick={() => setActiveIndex(1)}
          >
            <div
              className={`${
                pathname.includes("/progress") ? "bg-[#59B792]" : "bg-[#d9d9d9]"
              } rounded-full`}
            >
              <LoaderCircle className="text-white m-2" />
            </div>
            <span className="text-black text-sm">Progress</span>
          </Link>
          <Link
            href={"/askquestion"}
            className="flex gap-1 flex-col justify-center items-center"
            // onClick={() => setActiveIndex(2)}
          >
            <div
              className={`${
                pathname.includes("/askquestion")
                  ? "bg-[#59B792]"
                  : "bg-[#d9d9d9]"
              } rounded-full`}
            >
              <CircleHelp className="text-white m-2" />
            </div>
            <span className="text-black text-sm">Ask</span>
          </Link>
          <Link
            className="flex gap-1 flex-col justify-center items-center"
            href={"/more"}
          >
            <div
              className={`${
                pathname.includes("/more") ? "bg-[#59B792]" : "bg-[#d9d9d9]"
              } rounded-full`}
            >
              <AlignJustify className="text-white m-2" />
            </div>
            <span className="text-black text-sm">More</span>
          </Link>
        </div>

        {/* ////////////// */}
      </div>
    </div>
  );
}

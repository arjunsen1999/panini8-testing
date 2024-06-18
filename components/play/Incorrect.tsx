import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import React from "react";
import {useTimerStore} from "@/store/Timer";

const Incorrect = (id: any) => {
  const { setSeconds } = useTimerStore((state) => state);
  console.log(id);
  const handleClick = () => {
    Cookies.set("timer", "0");
    setSeconds(0);
  };
  return (
    <div className="w-full m-6  max-lg:m-0 border-2 border-gray-600 border-dotted flex justify-center items-center">
      <div className="flex flex-col p-6 justify-center items-center gap-4">
        <Image
          className="max-sm:h-[100px] max-sm:w-[100px]"
          src={"/icons/wrong.png"}
          height={200}
          width={200}
          alt=""
        />
        <div className="flex items-center gap-3">
          <Link
            className="text-[#3cab7d] max-sm:text-sm"
            href={`?play=mcq&cid=${id?.id}`}
            onClick={handleClick}
          >
            Try Again
          </Link>
          <button className="bg-[#3cab7d] mt-1 text-white max-lg:w-[100px] h-[40px] w-[140px] rounded-full max-sm:h-[30px] max-sm:w-[100px]">
            <Link
              className="flex justify-center gap-2 items-center"
              href="/play"
              onClick={handleClick}
            >
              Start
              <Image src={"/icons/arrow.png"} height={8} width={8} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Incorrect;

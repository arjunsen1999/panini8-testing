import { useAuth } from "@/store/Play";
import useTimerStore from "@/store/Timer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";

interface correctProps {
  name: string;
  point: number;
  index: number;
  setIndex: any;
  id: any;
}
const Correct: React.FC<correctProps> = ({
  name,
  point,
  index,
  setIndex,
  id,
}) => {
  const { score }: any = useAuth((state) => state);

  const { setSeconds } = useTimerStore((state) => state);

  const handleClick = () => {
    Cookies.set("timer", "0");
    setSeconds(0);
  };
  return (
    <div className="w-full m-6  max-lg:m-0 border-2 border-gray-600 border-dotted flex justify-center items-center">
      <div className="flex flex-col p-6 justify-center items-center gap-4">
        <Image
          className="max-sm:h-[100px] max-sm:w-[100px]"
          src={"/icons/right.png"}
          height={200}
          width={200}
          alt=""
        />
        <p className="max-sm:text-xs">Great Work {name}</p>
        <p className="max-sm:text-xs">
          You earned <span className="text-[#3cab7d]">+{score}</span> points
        </p>
        <button className="bg-[#3cab7d] mt-1 text-white max-lg:w-[140px] h-[40px] w-[140px] rounded-full max-sm:h-[30px] max-sm:w-[140px]">
          <Link
            onClick={handleClick}
            className="flex justify-center gap-2 items-center"
            href={`/play?play=mcq&cid=${id}`}
          >
            Next Activity
            <Image src={"/icons/arrow.png"} height={8} width={8} alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Correct;

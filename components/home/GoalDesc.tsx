import Image from "next/image";
import React, { useEffect, useState } from "react";
import courseBg from "@/public/icons/coursebg.svg";
import { Play } from "lucide-react";
import flag from "@/public/icons/flag.svg";
import icon from "@/public/icons/search.svg";
import { makeRequest } from "@/lib/api";
import { useRouter } from "next/navigation";

const fetchdata = async (id: string) => {
  return await makeRequest(
    "GET",
    `/api/v1/predefinegoal/get/courses/by-goal/${id}`
  );
};

const GoalDesc = ({ goal, setShowModal }: any) => {
  const router = useRouter();

  const handleClick = async (id: any) => {
    try {
      const data = await makeRequest(
        "POST",
        `/api/v1/goal/create/usergoal/${id}`
      );

      // Navigate to /play after receiving the data
      router.push("/play");
      // console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleOverlayClick = () => {
    setShowModal(false);
  };

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [moduleData, setModuleData] = useState([]);

  useEffect(() => {
    if (goal) {
      fetchdata(goal._id).then((res) => setModuleData(res.data.courses));
    }
  }, [goal]);

  return (
    <div
      className="fixed z-50 w-full min-h-screen min-w-screen h-full top-0 left-0 bg-opacity-65 bg-black flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div
        className="styled-scrollbar m-8 bg-white w-4/5 sm:w-3/5 md:w-1/2 rounded-md overflow-y-auto max-h-[90vh]"
        onClick={handleInnerClick}
      >
        <div className="relative">
          <Image
            alt=""
            src={courseBg}
            className="w-full h-[300px] object-cover" // Set desired height
            height={400} // Ensure this matches the class height
            width={4000} // Set to full width
          />
          <Image
            alt=""
            src={goal.icon || icon}
            className="absolute bottom-5 right-4 w-1/5"
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: "linear-gradient(to bottom, transparent, white)",
            }}
          ></div>
          <div className="absolute  bottom-5 left-5 text-2xl md:text-3xl text-black font-bold">
            {goal?.name}
          </div>
        </div>
        <div className="">
          <div className="flex items-center px-3 p-2 justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-black text-lg font-semibold md:text-xl">
                {goal?.name}
              </span>
              <span className="text-sm md:text-base font-medium text-[#706D6D]">
                Eligibility: {goal.eligibility}
              </span>
            </div>
            <button
              onClick={() => handleClick(goal._id)}
              className="flex  px-3 py-2 text-white text-sm md:text-base bg-[#59B792] items-center rounded-full gap-1 h-fit"
            >
              <Play size={20} /> Get Started
            </button>
          </div>
          <div className="border-dashed mx-4 border-[#D9D9D9] border"></div>
          <div className="flex flex-col gap-2 px-3 py-2">
            <span className="text-[#292828] font-semibold text-sm md:text-base">
              Description
            </span>

            <span className="text-[#706D6D] font-semibold text-sm ">
              {goal.description}
            </span>
          </div>
          <div className="border-dashed mx-4 border-[#D9D9D9] border"></div>
          <div className="px-3 py-2 flex flex-col gap-1">
            <span className="text-[#292828] font-semibold text-sm md:text-base">
              Modules in Goal
            </span>
            <div className="flex justify-start gap-4 py-3">
              <div className="flex flex-wrap gap-4">
                {moduleData &&
                  moduleData.map((elem: any) => {
                    return (
                      <div
                        className="flex gap-1 items-center w-2/5"
                        key={elem._id}
                      >
                        <Image alt="" src={flag} />
                        <span className="text-sm font-medium text-[#292828]">
                          {elem?.course}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalDesc;

import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

interface ModProps {
  courseData: any;
  icon: string;
  per: number;
}

const Module: React.FC<ModProps> = ({ icon, courseData, per }) => {
  return (
    <div className="flex justify-center ">
      <div className="w-[90%] bg-white p-2">
        <h1 className="border-b-2 border-dashed border-gray-300 m-4 text-xl p-2 font-semibold">
          Module Progress
        </h1>
        {courseData &&
          courseData.map((data: any, index: number) => {
            if (data) {
              return (
                <div
                  key={index}
                  className="my-12 w-full flex flex-row justify-between items-center"
                >
                  <div className="flex items-center w-1/5">
                    <Image src={icon} height={30} width={30} alt="icon" />
                    <p className="ml-2">{data?.course_name}</p>
                  </div>
                  <div className="w-4/5">
                    <ProgressBar
                      progress={
                        !isNaN(data?.percentage) && data?.percentage > 0
                          ? data?.percentage
                          : 0
                      }
                    />
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Module;

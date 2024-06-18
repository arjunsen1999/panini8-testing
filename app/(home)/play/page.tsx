"use client";
import Correct from "@/components/play/Correct";
import Genius from "@/components/play/Genius";
import Incorrect from "@/components/play/Incorrect";
import Mcq from "@/components/play/Mcq";
import Playon from "@/components/play/Playon";
import ProgressBar from "@/components/play/ProgressBar";
import { makeRequest } from "@/lib/api";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const selectedGoalData = async (): Promise<any | null> => {
  try {
    const data = await makeRequest("GET", "/api/v1/goal/getgoaldata");
    return data;
  } catch (err) {
    console.error(`Error during selected Goal Data: `, err);
    return null;
  }
};

export default function Page() {
  const [data, setData] = useState<any | null>(null);
  const pathname = usePathname();
  const params = useSearchParams();
  const playStatus = params.get("play");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await selectedGoalData();
      if (res) {
        setData(res);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ProgressBar progress={0} />
      <div className="flex flex-col lg:flex-row p-6 mb-10">
        <Genius minutes={""} per={""} marks={50} />

        {playStatus === "mcq" && (
          <Mcq
            goal={""}
            index={index}
            setIndex={setIndex}
            correctOption={"b"}
            name={""}
            point={0}
            topicData={data?.maxScoredTopic}
          />
        )}

        {pathname === "/play" && !playStatus && (
          <Playon
            module={data?.course?.course || ""}
            diff={data?.Difficulty || "Medium"}
            point={data?.totalCourseScore}
            id={data?.course?._id}
          />
        )}
        {playStatus === "correct" && (
          <Correct
            name={""}
            point={0}
            index={index}
            setIndex={setIndex}
            id={data?.course?._id}
          />
        )}
        {playStatus === "incorrect" && <Incorrect id={data?.course?._id} />}
      </div>
    </div>
  );
}

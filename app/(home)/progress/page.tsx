"use client";
import Head from "@/components/Progress/Head";
import History from "@/components/Progress/History";
import Module from "@/components/Progress/Module";
import ProgressBar from "@/components/Progress/ProgressBar";
import Strength from "@/components/Progress/Strength";
import Weakness from "@/components/Progress/Weekness";
import React, { useEffect, useState } from "react";
import icon from "@/public/icons/profile3.svg";
import { makeRequest } from "@/lib/api";

// Define the structure of the progress data returned by the API
interface ProgressData {
  data: {
    firstname: string;
    corrent_goal: {
      name: string;
      progress: number;
    };
    modules: any; // You should define a proper type based on the structure of modules data
  };
}

// Fetch progress data from the API
const getProgressData = async (): Promise<ProgressData | null> => {
  try {
    const data = await makeRequest("GET", "/api/v1/progress/user");
    return data;
  } catch (error) {
    console.error(`Error in getting progress data: ${error}`);
    return null;
  }
};

export default function Section() {
  const [data, setData] = useState<ProgressData | any>(null);

  useEffect(() => {
    getProgressData().then((res) => setData(res));
  }, []);

  return (
    <div className="w-full flex flex-col bg-gray-100 gap-6">
      <Head
        name={data?.data?.firstname ?? ""}
        goal={data?.data?.corrent_goal?.name ?? ""}
      />
      <ProgressBar
        progress={
          !isNaN(data?.data?.corrent_goal?.progress) &&
          data?.data?.corrent_goal?.progress > 0
            ? data?.data?.corrent_goal?.progress
            : 0
        }
      />
      <Strength strength={data?.data?.strength} />
      <Weakness weekness={data?.data?.weekness} />
      <Module courseData={data?.data?.modules} icon={icon} per={20} />
      <History data={data?.data?.history} />
    </div>
  );
}

"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import {useTimerStore} from "@/store/Timer";

const Timer: React.FC = () => {
  const { seconds, setSeconds, startTimer, stopTimer } = useTimerStore();
  const params = useSearchParams();
  const playStatus = params.get("play");

  // Initialize timer from cookie after component mounts to avoid SSR mismatch
  useEffect(() => {
    const timerFromCookie = Cookies.get("timer");
    if (timerFromCookie) {
      const initialSeconds = parseInt(timerFromCookie, 10);
      if (!isNaN(initialSeconds)) {
        setSeconds(initialSeconds);
      } else {
        setSeconds(0);
      }
    }
  }, [setSeconds]);

  useEffect(() => {
    if (playStatus === "mcq") {
      startTimer();
    } else {
      stopTimer();
    }

    return () => {
      stopTimer();
    };
  }, [playStatus, startTimer, stopTimer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="w-[300px] flex flex-col items-center justify-center p-6 gap-4 border-2 border-dotted border-grey-600 max-lg:w-1/2 max-lg:p-2">
      <p className="text-black">Timer:</p>
      <button
        className="h-[150px] w-[150px] border-2 border-red-600 border-solid rounded-full max-lg:h-[100px] max-lg:w-[100px]"
        onClick={() => console.log("Button clicked")}
      >
        <div className="text-3xl max-lg:text-lg text-red-600">
          {formatTime(seconds)}
        </div>
      </button>
    </div>
  );
};

export default Timer;

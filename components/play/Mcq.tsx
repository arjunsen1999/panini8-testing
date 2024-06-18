"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { makeRequest } from "@/lib/api";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { useAuth } from "@/store/Play";
import Cookies from "js-cookie";
import Timer from "./Timer";
import {useTimerStore} from "@/store/Timer";

interface McqProps {
  goal: string;
  correctOption: string;
  name: string;
  point: number;
  index: number;
  setIndex: any;
  topicData: any;
}

const getQuestion = async (cid: any) => {
  const data = await makeRequest("GET", `/api/v1/question/questiondata/${cid}`);
  return data;
};

const getTopic = async (cid: any) => {
  try {
    const data = await makeRequest("GET", `/api/v1/question/topicid/${cid}`);
    return data;
  } catch (error) {
    console.log(`Error during Gettopic : `, error);
  }
};

const Mcq: React.FC<McqProps> = ({
  goal,
  correctOption,
  name,
  point,
  topicData,
  index,
  setIndex,
}) => {
  const { questionRefresh, setQuestionRefresh, setScore }: any = useAuth(
    (state) => state
  );
  const { setSeconds, startTimer, stopTimer } = useTimerStore();
  const [showHint, setShowHint] = useState(false);

  const submitQuestion = async (questionStatus: any, questionID: any) => {
    const time = Cookies.get("timer");
    // Reset timer to zero
    if (questionStatus === "skip") {
      Cookies.set("timer", "0");
      setSeconds(0);
    }

    try {
      const res = await makeRequest("POST", "/api/v1/question/submit", {
        questionStatus,
        questionID,
        time,
      });

      return res;
    } catch (error) {
      console.log(`Error in submitting question. : ${error}`);
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const navigate = useRouter();
  const [topicId, setTopicId] = useState("");
  const [refreshTopic, setRefreshTopic] = useState(false);
  const [refreshquestion, setRefreshQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [questionContent, setQuestionContent] = useState<string | null>(null);
  const [isHtml, setIsHtml] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [questionid, setQuestionId] = useState(null);
  const [qType, setQType] = useState(null);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  function charToInt(char: any) {
    return char.toLowerCase().charCodeAt(0) - 97;
  }

  const handleCheck = () => {
    if (qType == "MCQ") {
      if (charToInt(correctAnswer) === parseInt(selectedOption)) {
        navigate.push("?play=correct");
        submitQuestion("correct", questionid);
      } else {
        navigate.push("?play=incorrect");
        submitQuestion("incorrect", questionid);
      }
    } else {
      if (answer == correctAnswer) {
        navigate.push("?play=correct");
        submitQuestion("correct", questionid);
      } else {
        navigate.push("?play=incorrect");
        submitQuestion("incorrect", questionid);
      }
    }
  };

  const params = useSearchParams();
  const [hint, setHint] = useState("");
  const cid = params.get("cid");

  useEffect(() => {
    getTopic(cid).then((res) => {
      setTopicId(res.data.topicID);
      setRefreshQuestion(!refreshquestion);
    });
  }, [refreshTopic]);

  useEffect(() => {
    if (topicId) {
      getQuestion(topicId)
        .then((res: any) => {
          setQuestionContent(res.data.question.question[0]);
          setOptions(res.data.question.options);
          setCorrectAnswer(res.data.question.answer[0]);
          setQuestionId(res.data.question._id);
          setHint(res.data.question.hint[0]);
          setQType(res.data.question.type);
          const w = res.data.question.weightage[0];
          const d = res.data.question.difficultyLevel;
          setScore((d * w) / 100);
        })
        .catch((err) => {
          if (err?.response?.data?.message === "not found") {
            setRefreshTopic(!refreshTopic);
            console.log(err?.response?.data?.message);
          }
        });
    }
  }, [topicId, questionRefresh]);

  const handleSkipQuestion = (questionid: any) => {
    submitQuestion("skip", questionid).then(() => {
      setQuestionRefresh();
      startTimer(); // Restart the timer
    });
  };

  return (
    <div className="w-full m-6 max-lg:m-0 border-2 border-grey-600 border-dotted gap-6">
      <h1 className="p-3 border-2 border-grey-600 border-dotted font-bold">
        Quiz
      </h1>
      <div className="p-3 border-2 border-grey-600 border-dotted">
        <button className="py-2 px-5 text-white mt-2 bg-[#3cab7d] rounded-full">
          MCQ
        </button>
      </div>

      <h1 className="p-3 font-bold text-[24px]">
        {questionContent ? (
          <Latex>{questionContent}</Latex>
        ) : (
          "Question related to this topic is not available!!"
        )}
      </h1>

      {qType == "MCQ" && (
        <div>
          <p className="p-3">Select any option</p>
          <div className="options flex flex-col gap-3 mt-1 p-3">
            {options.map((option, idx) => (
              <label
                key={idx}
                className="flex p-1 gap-3 border-grey border-2 w-[95%] cursor-pointer"
              >
                <input
                  type="radio"
                  name="mcq"
                  value={idx.toString()}
                  checked={selectedOption === idx.toString()}
                  onChange={handleOptionChange}
                />
                <Latex>{option.toString()}</Latex>
              </label>
            ))}
          </div>
        </div>
      )}

      {qType != "MCQ" && (
        <div className="flex flex-col gap-2">
          <p className="p-3">Type your answer</p>
          <input
            className="rounded-lg border focus:outline-none mx-4 p-2 flex items-center"
            placeholder="type your answer"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
      )}

      <div className="flex justify-between">
        <div className="relative flex flex-row gap-3 p-3">
          <div className="w-full">
            <button
              onClick={toggleHint}
              className="bg-yellow-500 text-white py-2 px-5 rounded-full max-sm:px-2 max-sm:text-sm"
            >
              Hint
            </button>
            {showHint && (
              <div className="absolute mt-2 p-2 bg-white border border-gray-300 rounded shadow-lg">
                <p className="text-black w-full text-wrap">
                  <Latex>{hint.toString()}</Latex>
                </p>
              </div>
            )}
          </div>

          <button className="border-2 border-[#3cab7d] border-solid py-2 px-5 rounded-full flex items-center gap-2">
            <Image
              src={"/icons/learn.png"}
              height={15}
              width={15}
              alt="learn icon"
            />
            <span className="max-sm:hidden">learn</span>
          </button>
        </div>
        <div className="flex flex-row gap-3 p-3">
          <button
            onClick={() => handleSkipQuestion(questionid)}
            className="border-2 border-[#3cab7d] border-solid py-2 px-5 rounded-full flex items-center max-sm:py-1 max-sm:px-3 max-sm:text-sm"
          >
            Skip
          </button>
          <button
            className="bg-[#3cab7d] py-2 px-5 text-white gap-2 rounded-full flex items-center max-sm:py-1 max-sm:px-3 max-sm:text-xs max-sm:gap-1"
            onClick={handleCheck}
          >
            Check
            <Image
              src={"/icons/arrow.png"}
              height={8}
              width={8}
              alt="arrow icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mcq;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import {
  ChevronRight,
  CircleHelp,
  Newspaper,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { makeRequest } from "@/lib/api";
import Paginate from "./Pagination";

const getData = async (page: number, limit: number) => {
  const data = await makeRequest(
    "GET",
    `/api/v1/ask/question?fields=creator&limit=${limit}&page=${page}`
  );
  return data;
};

const AskQuestionPage = () => {
  const [questionData, setQuestionData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState(0);
  const [limit] = useState(5);

  useEffect(() => {
    getData(currentPage, limit)
      .then((res) => {
        setQuestionData(res.data.askquestion);
        const val = res?.data?.meta?.total_count;
        setTotalPage(Math.ceil(val / limit));
      })
      .catch((err) =>
        console.error(`Error in getData at askquestion : ${err}`)
      );
  }, [currentPage]);
  const Router = useRouter();
  return (
    <div className="w-full">
      <div>
        <div className="px-4 py-2 flex md:hidden flex-col gap-3">
          <div className="rounded-3xl p-2 px-3 bg-white flex justify-start">
            <input
              className="text-black font-medium text-md focus:outline-none w-full"
              placeholder="search"
            />
            <Search className="w-fit text-[rgb(89,183,146)]" />
          </div>
          <div className="flex gap-2 justify-between">
            <div className="w-1/2 rounded-md p-2 px-3 flex justify-between gap-2 bg-white items-center cursor-pointer">
              <span className="text-[16px] font-medium">Top Askers</span>
              <ChevronRight className="text-[#59B792]" />
            </div>
            <div className="w-1/2 rounded-md p-2 px-3 flex justify-between gap-2 bg-white items-center cursor-pointer">
              <span className="text-[16px] font-medium">My Tickets</span>
              <ChevronRight className="text-[#59B792]" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full p-2 items-center cursor-pointer px-4 bg-[#59B792] text-white flex gap-2">
              <Newspaper className="cursor-pointer" size={18} />
              <span className="text-white text-[16px] font-medium">Feed</span>
            </div>
            <div className="rounded-full p-2 items-center cursor-pointer px-4 text-[#59B792] bg-white flex gap-2">
              <CircleHelp />
              <span className=" text-[16px] font-medium">My Questions</span>
            </div>
          </div>
        </div>
        <div className="p-4 flex h-fit">
          <div className="flex  w-full md:bg-[#cccccc] h-fit ">
            <div className=" w-1/3 hidden md:flex flex-col gap-3 p-2">
              <div className="rounded-3xl px-2 p-1 bg-white flex justify-start">
                <input
                  className="text-black font-medium text-md focus:outline-none w-full"
                  placeholder="search"
                />
                <Search className="w-fit text-[#59B792]" />
              </div>
              <div className="flex flex-col gap-3 p-4 bg-white rounded-md">
                <span className="text-black text-md font-medium">
                  Top Askers
                </span>
                <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                <div className="flex items-center gap-2">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    src={"/icons/asker.png"}
                    className="h-6 w-6"
                  />
                  <span className="text-md font-medium">Shasha H</span>
                </div>
                <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                <div className="flex items-center gap-2">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={"/icons/asker.png"}
                    className="h-6 w-6"
                  />
                  <span className="text-md font-medium">Shasha H</span>
                </div>
                <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                <div className="flex items-center gap-2">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    src={"/icons/asker.png"}
                    className="h-6 w-6"
                  />
                  <span className="text-md font-medium">Shasha H</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4 bg-white rounded-md">
                <span className="text-black text-md font-medium">
                  My Tickets
                </span>
                <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                <div className="flex items-center gap-2">
                  <CircleHelp
                    size={38}
                    className="text-[#59B792]"
                    strokeWidth={3}
                  />
                  <span className="text-md font-medium">
                    10 Questions Answers
                  </span>
                </div>
                <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                <div className="flex items-center gap-2">
                  <CircleHelp
                    size={38}
                    className="text-[#F44321]"
                    strokeWidth={3}
                  />
                  <span className="text-md font-medium">
                    5 Unanswered questions
                  </span>
                </div>
                <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              </div>
            </div>
            <div className="bg-[#ffffff] w-full md:w-2/3 relative rounded-sm ms-2 p-4 flex flex-col gap-3 h-full">
              <div className="flex justify-between">
                <span className="text-black text-lg">Feed</span>
                <Link
                  href={"/askquestion/add-question"}
                  className="flex gap-2 bg-[#59B792] cursor-pointer px-3 py-2 items-center rounded-full"
                >
                  <Plus strokeWidth={2} className="text-white" />
                  <span className="text-white text-sm font-medium">
                    Ask Question
                  </span>
                </Link>
              </div>

              <div className="flex flex-col gap-3 items-stretch">
                {questionData &&
                  questionData.map((question: any, idx : number) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="border  border-dashed w-full border-[#d9d9d9]"></div>

                      <div
                        className="flex gap-2 cursor-pointer"
                        onClick={() =>
                          Router.push(
                            `/askquestion/question-details?id=${question._id}`
                          )
                        }
                      >
                        <Image
                          alt=""
                          width={1000}
                          height={1000}
                          src={"/icons/search.svg"}
                          className="max-h-fit max-w-fit h-10 w-10"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-black text-lg font-semibold">
                            <Latex>{question?.title}</Latex>
                          </span>
                          <div className="flex gap-2 items-center flex-wrap">
                            {question &&
                              question.tags.map(
                                (tag: any, index: number) =>
                                  tag?.length > 0 && (
                                    <div
                                      key={index}
                                      className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm"
                                    >
                                      {tag}
                                    </div>
                                  )
                              )}
                            <div className="border-s border-s-[#D9D9D9] h-full  hidden lg:static"></div>
                            <span className="text-sm text-normal text-[#59B792]">
                              Posted {question.creator.firstname}{" "}
                              {question.creator.lastname}
                            </span>
                          </div>
                          <span className="text-sm text-[#706D6D] text-medium">
                            <Latex>{question?.description}</Latex>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="w-full  flex justify-center pb-16 md:pb-4">
                  <Paginate
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPage={totalPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionPage;

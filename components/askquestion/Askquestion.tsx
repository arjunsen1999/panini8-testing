"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Search,
  CircleHelp,
  Plus,
  Newspaper,
  ChevronRight,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Subscript,
  Superscript,
} from "lucide-react";

const Askquestion = () => {
  const [questionIndex, setQuestionIndex] = useState<Number>(1);
  return (
    <div>
      {questionIndex === 0 && (
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
                <Newspaper size={18} />
                <span className="text-white text-[16px] font-medium">Feed</span>
              </div>
              <div className="rounded-full p-2 items-center cursor-pointer px-4 text-[#59B792] bg-white flex gap-2">
                <CircleHelp />
                <span className=" text-[16px] font-medium">My Questions</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex">
            <div className="flex  w-full md:bg-[#cccccc] ">
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
                    <Image alt="" width={10} height={10} src={"/icons/asker.png"} className="" />
                    <span className="text-md font-medium">Shasha H</span>
                  </div>
                  <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                  <div className="flex items-center gap-2">
                    <Image width={10} height={10} alt="" src={"/icons/asker.png"} className="" />
                    <span className="text-md font-medium">Shasha H</span>
                  </div>
                  <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                  <div className="flex items-center gap-2">
                    <Image width={10} height={10} alt="" src={"/icons/asker.png"} className="" />
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
              <div className="bg-[#ffffff] w-full md:w-2/3 rounded-sm ms-2 p-4 flex flex-col gap-3">
                <div className="flex justify-between">
                  <span className="text-black text-lg">Feed</span>
                  <div className="flex gap-2 bg-[#59B792] cursor-pointer px-3 py-2 items-center rounded-full">
                    <Plus strokeWidth={2} className="text-white" />
                    <span className="text-white text-sm font-medium">
                      Ask Question
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                  <div className="flex gap-2">
                    <Image
                      alt=""
                      width={10} height={10}
                      src={"/icons/search.png"}
                      className="max-h-fit max-w-fit h-10 w-10"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-black text-lg font-semibold">
                        What is the sum of 130+125+191?
                      </span>
                      <div className="flex gap-2 items-center flex-wrap">
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="border-s border-s-[#D9D9D9] h-full  hidden lg:static"></div>
                        <span className="text-sm text-normal text-[#59B792]">
                          Posted by Ashani Dasgupta
                        </span>
                      </div>
                      <span className="text-sm text-[#706D6D] text-medium">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit. Lorem ipsum dolor
                        sit amet consectetur adipiscing elit Ut et massa
                        mi.Lorem ipsum dolor sit amet consectetur adipiscing
                        elit Ut et massa mi. Aliquam in hendrerit. Lorem ipsum
                        dolor sit amet consectetur
                      </span>
                    </div>
                  </div>
                  <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                  <div className="flex gap-2">
                    <Image
                      alt=""
                      width={10} height={10}
                      src={"/icons/search.png"}
                      className="max-h-fit max-w-fit h-10 w-10"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-black text-lg font-semibold">
                        What is the sum of 130+125+191?
                      </span>
                      <div className="flex gap-2 items-center flex-wrap">
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="border-s border-s-[#D9D9D9] h-full hidden lg:static"></div>
                        <span className="text-sm text-normal text-[#59B792]">
                          Posted by Ashani Dasgupta
                        </span>
                      </div>
                      <span className="text-sm text-[#706D6D] text-medium">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit. Lorem ipsum dolor
                        sit amet consectetur adipiscing elit Ut et massa
                        mi.Lorem ipsum dolor sit amet consectetur adipiscing
                        elit Ut et massa mi. Aliquam in hendrerit. Lorem ipsum
                        dolor sit amet consectetur
                      </span>
                    </div>
                  </div>
                  <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                  <div className="flex gap-2">
                    <Image
                      alt=""
                      width={10} height={10}
                      src={"/icons/search.png"}
                      className="max-h-fit max-w-fit h-10 w-10"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-black text-lg font-semibold">
                        What is the sum of 130+125+191?
                      </span>
                      <div className="flex gap-2 items-center flex-wrap">
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="border-s border-s-[#D9D9D9] h-full hidden lg:static"></div>
                        <span className="text-sm text-normal text-[#59B792]">
                          Posted by Ashani Dasgupta
                        </span>
                      </div>
                      <span className="text-sm text-[#706D6D] text-medium">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit. Lorem ipsum dolor
                        sit amet consectetur adipiscing elit Ut et massa
                        mi.Lorem ipsum dolor sit amet consectetur adipiscing
                        elit Ut et massa mi. Aliquam in hendrerit. Lorem ipsum
                        dolor sit amet consectetur
                      </span>
                    </div>
                  </div>
                  <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                  <div className="flex gap-2">
                    <Image
                      alt=""
                      width={10} height={10}
                      src={"/icons/search.png"}
                      className="max-h-fit max-w-fit h-10 w-10"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-black text-lg font-semibold">
                        What is the sum of 130+125+191?
                      </span>
                      <div className="flex gap-2 items-center flex-wrap">
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="border-s border-s-[#D9D9D9] h-full hidden lg:static"></div>
                        <span className="text-sm text-normal text-[#59B792]">
                          Posted by Ashani Dasgupta
                        </span>
                      </div>
                      <span className="text-sm text-[#706D6D] text-medium">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit. Lorem ipsum dolor
                        sit amet consectetur adipiscing elit Ut et massa
                        mi.Lorem ipsum dolor sit amet consectetur adipiscing
                        elit Ut et massa mi. Aliquam in hendrerit. Lorem ipsum
                        dolor sit amet consectetur
                      </span>
                    </div>
                  </div>
                  <div className="border border-dashed w-full border-[#d9d9d9]"></div>
                  <div className="flex gap-2">
                    <Image
                      alt=""
                      width={10} height={10}
                      src={"/icons/search.png"}
                      className="max-h-fit max-w-fit h-10 w-10"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-black text-lg font-semibold">
                        What is the sum of 130+125+191?
                      </span>
                      <div className="flex gap-2 items-center flex-wrap">
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="px-4 py-1 w-fit bg-[#fec19b] text-white font-normal flex items-center rounded-full text-sm">
                          Math
                        </div>
                        <div className="border-s border-s-[#D9D9D9] h-full hidden lg:static"></div>
                        <span className="text-sm text-normal text-[#59B792]">
                          Posted by Ashani Dasgupta
                        </span>
                      </div>
                      <span className="text-sm text-[#706D6D] text-medium">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam in hendrerit. Lorem ipsum dolor
                        sit amet consectetur adipiscing elit Ut et massa
                        mi.Lorem ipsum dolor sit amet consectetur adipiscing
                        elit Ut et massa mi. Aliquam in hendrerit. Lorem ipsum
                        dolor sit amet consectetur
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full p-4 flex justify-center">
                  {" "}
                  pagination
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {questionIndex === 1 && (
        <div className="m-4 border rounded-md bg-white p-4 flex flex-col gap-4">
          <span className="text-black font-medium text-[16px]">
            Ask a Question
          </span>
          <div className="border-t border-t-[#D9D9D9] border-dashed"></div>
          <div className="flex flex-col gap-2">
            <span className="text-black font-medium text-[16px]">Title</span>
            <input
              className="p-2 border border-[#D9D9D9] rounded-lg text-md font-medium focus:outline-none"
              placeholder="Add a Title for your question"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-black font-medium text-[16px]">
              Description:
            </span>
            <div className="border border-[#D9D9D9] rounded-lg">
              <div className="bg-[#d5ede3] w-full p-3 flex flex-col gap-3 ">
                <div className="text-black font-medium text-sm flex gap-1 items-center">
                  <div className="flex gap-3 items-center">
                    <span>Normal</span>
                    <ChevronDown size={10} />
                    <div className="border-l h-full p-2 border-l-[#D9D9D9]"></div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>Font</span>
                    <ChevronDown size={10} />
                    <div className="border-l h-full p-2 border-l-[#D9D9D9]"></div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>Size</span>
                    <ChevronDown size={10} />
                    <div className="border-l h-full p-2 border-l-[#D9D9D9]"></div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Bold size={16} />
                    <Italic size={16} />
                    <Underline size={16} />
                    <Subscript size={16} />
                    <Superscript size={16} />
                    <div className="border-l h-full p-2 border-l-[#D9D9D9]"></div>
                  </div>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Askquestion;

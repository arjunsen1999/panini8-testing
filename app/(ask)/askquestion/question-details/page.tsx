"use client";
import Questionditor from "@/components/ui/CommentTexteditor";
import { makeRequest } from "@/lib/api";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

import katex from "katex";
import "katex/dist/katex.min.css";
import {
  Bold,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Image,
  ImagePlus,
  Italic,
  Link2,
  Newspaper,
  Redo2,
  Search,
  Smile,
  SpellCheck2,
  Subscript,
  Superscript,
  ThumbsDown,
  ThumbsUp,
  Underline,
  Undo2,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Markup from "@/components/inputs/markup";
import { useForm } from "react-hook-form";

const getData = async (id: any) => {
  const data = await makeRequest("GET", `/api/v1/ask/question/${id}`);
  return data;
};

const postComment = async (id: any, comment: any) => {
  const data = await makeRequest(
    "POST",
    `/api/v1/ask/question/comment/${id}`,
    comment
  );
  return data;
};

const getComments = async (id: any) => {
  const data = await makeRequest(
    "GET",
    `/api/v1/ask/question/comment/${id}?fields=creator`
  );
  return data;
};
function makeMathString(input: any) {
  const latexRegex = /\$(.*?)\$/g;
  const replacedOutput = input.replace(latexRegex, (match: any, p1: any) => {
    try {
      return katex.renderToString(p1, {
        throwOnError: false,
      });
    } catch (error) {
      // If KaTeX encounters an error, return the original match
      return match;
    }
  });
  return replacedOutput;
}

export default function QuestionDetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [questionData, setQuestionData] = useState<any | any>(null);
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState<any>([]);

  const [characterCount, setCharacterCount] = useState({
    question: { length: 0 },
    excerpt: { length: 0 },
    description: { length: 0 },
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    reset,
    control,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {
      getData(id)
        .then((res: any) => {
          setQuestionData(res.data.askquestion),
            console.log(res.data.askquestion);
        })
        .catch((err) =>
          console.log(`Error in getting question details ${err}`)
        );
    }
  }, [id]);
  const [commentRefresh, setCommentRefresh] = useState(false);
  const onSubmit = async (data: any) => {
    //  if(data.comment){
    //   setError("comment", "comment is required")
    //  }
    postComment(id, data)
      .then(() => {
        setComment(""),
          setCommentRefresh(!commentRefresh),
          setShowComment(false);
        toast.success("The comment has been posted!!");
      })
      .catch((err) => console.log(`Error in posting question ${err}`));
  };

  useEffect(() => {
    if (id) {
      getComments(id)
        .then((res) => setCommentData(res.data.comment))
        .catch((err) => console.log(`Error in getting comments ${err}`));
    }
  }, [id, commentRefresh]);

  const [showComment, setShowComment] = useState(false);

  // function makeMathString(input: any) {
  //   const latexRegex = /\$(.*?)\$/g;
  //   const replacedOutput = input.replace(latexRegex, (match: any, p1: any) => {
  //     try {
  //       return katex.renderToString(p1, {
  //         throwOnError: false,
  //       });
  //     } catch (error) {
  //       // If KaTeX encounters an error, return the original match
  //       return match;
  //     }
  //   });
  //   return replacedOutput;
  // }
  return (
    <div className="w-full">
      <div className="p-4 pb-32 sm:pb-4">
        <div className="px-4 py-2 flex sm:hidden flex-col gap-3">
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
        <div className="flex  gap-4">
          <div className="hidden sm:flex  flex-col gap-3 w-1/4 ">
            <div className="flex flex-col gap-3 p-4 bg-white rounded-md">
              <span className="text-black text-md font-medium">Top Askers</span>
              <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              <div className="flex items-center gap-2">
                <img src={"/icons/asker.png"} className="h-10 w-10" />
                <span className="text-md font-medium">Shasha H</span>
              </div>
              <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              <div className="flex items-center gap-2">
                <img alt="" src={"/icons/asker.png"} className="h-10 w-10" />
                <span className="text-md font-medium">Shasha H</span>
              </div>
              <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              <div className="flex items-center gap-2">
                <img alt="" src={"/icons/asker.png"} className="h-10 w-10" />
                <span className="text-md font-medium">Shasha H</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 bg-white rounded-md">
              <span className="text-black text-md font-medium">My Tickets</span>
              <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              <div className="flex items-center gap-2">
                <CircleHelp
                  size={38}
                  className="text-[#59B792]"
                  strokeWidth={3}
                />
                <span className="text-sm font-medium">
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
                <span className="text-sm font-medium">
                  5 Unanswered questions
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-3/4">
            <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
              <div className="flex justify-between">
                <span className="font-semibold text-lg text-[#292828]">
                  {questionData?.title}
                </span>

                <div className="flex gap-2 items-center font-medium text-black ">
                  <ThumbsUp size={20} className="cursor-pointer" />
                  100
                  <ThumbsDown size={20} className="cursor-pointer" />
                  100
                </div>
              </div>
              <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              <span className="text-[#706D6D] text-sm">
                <Latex> {questionData?.description}</Latex>
              </span>
              <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              <span className="font-semibold text-lg text-[#292828]">
                Tags :
                {questionData?.tags
                  .filter((tag: any) => tag.length > 0)
                  .map((tag: any, index: number) => `#${tag}`)
                  .join(" ")}
              </span>
            </div>
            <div className="flex flex-col gap-3 bg-white rounded-lg p-5">
              <span className="font-semibold text-lg text-[#292828]">
                Comments
              </span>

              <div className="border border-dashed w-full border-[#d9d9d9]"></div>
              {commentData?.map((comment: any, index: number) => {
                console.log(comment?.comment);
                const userComment = comment?.comment || "";

                return (
                  <div className="" key={index}>
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <img src={"/icons/avatar.png"} height={35} width={35} />{" "}
                        <span className="font-semibold text-[16px] text-[#292828]">
                          {comment.creator.firstname} {comment.creator.lastname}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center font-medium text-black ">
                        <ThumbsUp size={20} className="cursor-pointer" />
                        {comment.likes.length}
                      </div>
                    </div>

                    {/* <span className="text-[#706D6D] text-sm">
                      <Latex>{`$${comment?.comment}$`}</Latex>
                    </span> */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: makeMathString(userComment),
                      }}
                    />
                  </div>
                );
              })}
              <div className="border border-dashed w-full border-[#d9d9d9]"></div>

              <div
                className="w-full cursor-pointer p-3 rounded-full border border-[#d9d9d9] text-[16px] text-[#292828] font-medium focus:outline-none px-4"
                onClick={() => setShowComment(true)}
              >
                Add Comment
              </div>
            </div>
            {showComment && (
              <div className="flex flex-col gap-3 bg-white rounded-md md:pb-3 pb-3 sm:pb-24 p-3">
                {/* <Questionditor setComment={setComment} /> */}
                <form className="w-full">
                  <h1 className="mb-2 text-sm font-semibold">Question</h1>
                  <Markup
                    watch={watch}
                    setValue={setValue}
                    register={register}
                    id="comment"
                    placeholderText=""
                    errors={"comment"}
                    setError={setError}
                    textCounter
                    clearErrors={clearErrors}
                    handlecharacterCount={setCharacterCount}
                  />
                  {/* <MarkupInput register={register} id="content" placeholderText="" handleBodyTextFormatting={() => {}} /> */}
                  <div
                    className="flex justify-end"
                    onClick={handleSubmit(onSubmit)}
                  >
                    <button className="border-2 border-[#59B792] p-2 bg-[#59B792] text-white font-semibold text-[16px] rounded-full flex gap-2 px-3 items-center">
                      Submit
                      <ChevronRight />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

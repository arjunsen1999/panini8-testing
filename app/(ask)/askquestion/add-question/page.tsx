"use client";
import Questionditor from "@/components/ui/Texteditor";
import { makeRequest } from "@/lib/api";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import {
  Bold,
  ChevronDown,
  ChevronRight,
  Image,
  ImagePlus,
  Italic,
  Link2,
  Redo2,
  Smile,
  SpellCheck2,
  Subscript,
  Superscript,
  Underline,
  Undo2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const submitQuestion = async (data: any) => {
  const res = await makeRequest("POST", "/api/v1/ask/question", data);
  return res;
};
export default function AddQuestionPage() {
  const router = useRouter();

  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const onSubmit = (formdata: any) => {
    if (formdata.title.length === 0 || formdata.description.length === 0) {
      toast.warning("Title Or description field is empty!!");
    } else {
      submitQuestion(formdata)
        .then((res) => {
          toast.success("Question submitted successfull!!"),
            router.push("/askquestion");
        })
        .catch((err) => console.log(`Error in submitting questoin : ${err}`));
    }
  };
  useEffect(() => {
    console.log(formdata);
  }, [formdata]);
  return (
    <div className="w-full">
      <div className="sm:pb-0 pb-20">
        <div className="m-4 border rounded-md bg-white p-4 flex flex-col gap-4 ">
          <span className="text-black font-medium text-[16px] ">
            Ask a Question
          </span>
          <div className="border-t border-t-[#D9D9D9] border-dashed"></div>
          <div className="flex gap-4  md:flex-row flex-col">
            <div className="flex w-full md:w-1/2 flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-black font-medium text-[16px]">
                  Title
                </span>
                <input
                  className="p-2 border border-[#D9D9D9] rounded-lg text-md font-medium focus:outline-none"
                  placeholder="Add a Title for your question"
                  onChange={(e) =>
                    setFormdata((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-black font-medium text-[16px]">
                  Description:
                </span>

                <Questionditor setFormData={setFormdata} />
              </div>
              <div className="flex justify-end gap-3 px-4">
                <button
                  className="border-2 border-[#59B792] p-2 bg-[#59B792] text-white font-semibold text-[16px] rounded-full flex gap-2 px-3 items-center"
                  onClick={() => onSubmit(formdata)}
                >
                  Submit
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2 border border-[#D9D9D9] rounded-md p-2 ">
              <span className="text-black text-base font-semibold">
                Preview
              </span>
              {formdata.title.length != 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-black text-base font-semibold">
                    Title :
                  </span>
                  <div className="text-black text-base font-semibold">
                    <Latex>{formdata.title}</Latex>
                  </div>
                </div>
              )}
              {formdata.description.length != 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-black text-base font-semibold">
                    Description :
                  </span>
                  <div className="text-black text-base font-semibold">
                    <Latex>{formdata.description}</Latex>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

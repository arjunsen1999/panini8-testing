"use client";

import Card from "@/components/home/Card";
import Footer from "@/components/home/Footer";
import Herosection from "@/components/home/Herosection";
import Progress from "@/components/home/Progress";
import { ChevronLeftIcon, ChevronRight, Play, Star } from "lucide-react";
import { useEffect, useState } from "react";
import img1 from "../public/icons/homescreen1.svg";
import Image from "next/image";
import profile1 from "../public/icons/profile1.svg";
import profile2 from "../public/icons/profile2.svg";
import profile3 from "../public/icons/profile3.svg";
import like from "../public/icons/like.svg";
import rating from "../public/icons/rating.svg";
import authbg from "../public/icons/auth-background.svg";
import { useSession } from "next-auth/react";
import Cookie from "js-cookie";
import { useAuth } from "@/store/Auth";
import { makeRequest } from "@/lib/api";

// import Card from "./testing/Card";
const getGoals = async () => {
  return await makeRequest("GET", "/api/v1/predefinegoal/get");
};

const getTestimonials = async () => {
  const data = await makeRequest(
    "GET",
    "/api/v1/testimonial/feedback?page=1&limit=4&fields=creator&select=-updatedAt"
  );
  console.log(data.data.testimonial);
  return data;
};
export default function Home() {
  const questionData = [
    {
      title: "What is the sum of 130+125+191? ",
      options: ["140", "466", "889", "500"],
    },
    {
      title: "What is the sum of 130+125+291?",
      options: ["240", "466", "889", "500"],
    },
    {
      title: "What is the sum of 130+125+391?",
      options: ["340", "466", "889", "500"],
    },
    {
      title: "What is the sum of 130+125+491?",
      options: ["440", "466", "889", "500"],
    },
  ];

  // const data = [
  //   {
  //     title: "For Students from 1st to 6th",
  //     goals: [
  //       {
  //         title: "College level",
  //         className: "bg-[#ff7a80]",
  //         img: "../icons/search.svg",
  //       },
  //       {
  //         title: "Statistics",
  //         className: "bg-[#faa169]",
  //         img: "../icons/calculator.svg",
  //       },
  //       {
  //         title: "Math Olampiad 1",
  //         className: "bg-[#cdde7c]",
  //         img: "../icons/graph.svg",
  //       },
  //       {
  //         title: "Math Olampiad 2",
  //         className: "bg-[#6debb9]",
  //         img: "../icons/layer.svg",
  //       },
  //     ],
  //   },
  //   {
  //     title: "For Students from 7th to 10th",
  //     goals: [
  //       {
  //         title: "College level",
  //         className: "bg-[#b780fd]",
  //         img: "../icons/exam.svg",
  //       },
  //       {
  //         title: "Statistics",
  //         className: "bg-[#ffe483]",
  //         img: "../icons/board.svg",
  //       },
  //       {
  //         title: "Math Olampiad 1",
  //         className: "bg-[#59b792]",
  //         img: "../icons/book.svg",
  //       },
  //       {
  //         title: "Math Olampiad 2",
  //         className: "bg-[#8ba2fe]",
  //         img: "../icons/pi.svg",
  //       },
  //     ],
  //   },
  //   {
  //     title: "For Students from 11th to 12th",
  //     goals: [
  //       {
  //         title: "College level",
  //         className: "bg-[#faa169]",
  //         img: "../icons/exam.svg",
  //       },
  //       {
  //         title: "Statistics",
  //         className: "bg-[#cdde7c]",
  //         img: "../icons/board.svg",
  //       },
  //       {
  //         title: "Math Olampiad 1",
  //         className: "bg-[#6debb9]",
  //         img: "../icons/book.svg",
  //       },
  //       {
  //         title: "Math Olampiad 2",
  //         className: "bg-[#ff7a80]",
  //         img: "../icons/pi.svg",
  //       },
  //     ],
  //   },
  // ];

  const [goalData, setGoalData] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    getGoals().then((res) => {
      setGoalData(res.data.goalData);
      console.log(res.data.goalData);
    });

    getTestimonials()
      .then((res) => {
        setTestimonial(res.data.testimonial),
          console.log(res.data.testimonial[0]);
      })
      .catch((err) => console.log(`Error in getting testimonials ${err}`));
  }, []);

  const [questionIndex, setQuestionIndex] = useState(0);
  const { setIsAuth }: any = useAuth((state) => state);

  const handleNext = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questionData.length);
  };

  const handlePrev = () => {
    setQuestionIndex(
      (prevIndex) => (prevIndex - 1 + questionData.length) % questionData.length
    );
  };

  const { data: session }: any = useSession();
  useEffect(() => {
    if (session) {
      setIsAuth(session?.accessToken);
      Cookie.set("access-token", session?.accessToken);
    }
  }, [session]);
  return (
    <main className="w-full   ">
      <div className="w-full min-h-[90vh]  relative flex justify-center items-center ">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/icons/auth-background.svg')] bg-no-repeat bg-top bg-cover  animated-bg"></div>
        <div className="absolute w-full h-full top-0 z-0"></div>
        <div
          className=" bg-[#59b792] p-1 text-white absolute left-[15%] md:left-[25%] top-1/2 rounded-full hidden sm:flex items-center cursor-pointer z-50"
          onClick={handlePrev}
        >
          <ChevronLeftIcon />
        </div>
        <div
          className=" bg-[#59b792] p-1 text-white absolute  right-[15%] md:right-[25%] top-1/2 rounded-full hidden sm:flex items-center cursor-pointer z-50"
          onClick={handleNext}
        >
          <ChevronRight />
        </div>
        <Herosection questionData={questionData[questionIndex]} />
      </div>
      <div className="w-full  flex flex-col gap-6 mb-16 md:mb-32 md:px-16 p-4 mt-20 md:mt-40 ">
        {goalData?.map((ele: any) => (
          <div key={ele.title} className="">
            <div className="flex gap-2 items-center mb-4">
              <h2 className="text-lg font-semibold ps-4">{ele.title}</h2>
              <ChevronRight size={20} />
            </div>
            {/* <div className="flex gap-4 overflow-x-auto overflow-y-visible hide-horizontal-scrollbar"> */}
            <div className="flex gap-4 flex-wrap">
              {ele.goals?.map((goal: any) => (
                <div key={goal.name} className="overflow-visible">
                  <Card
                    title={goal.name}
                    img={goal.icon || "../icons/search.svg"}
                    className={goal.coverImage || "bg-[#faa169]"}
                    goal={goal}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-center mb-8 md:mb-32 px-8 md:px-16">
          <h1 className="text-3xl font-bold md:text-start text-center">
            Practise Everyday. Beautiful Problems. Adaptively
          </h1>
        </div>

        <div className="w-full mb-12 md:px-16">
          <Progress />
        </div>

        <div className="px-4 sm:px-12 py-6">
          <div className="bg-[#FFE483] flex flex-col sm:flex-row w-full items-center justify-between px-8 sm:px-16 p-4 gap-3">
            <div className="flex justify-center items-center sm:items-start sm:justify-start gap-2 flex-col sm:w-1/3">
              <span className="text-xl  text-[#292828] font-semibold text-center sm:text-start">
                Practise problems from Olympiads adaptively 📚
              </span>
              <span className="text-[#292828] text-sm font-medium text-center sm:text-start">
                {`Sharpen your skills for Math with Panini8! Offering a challenge
                that's just right. Get the most out of your study time by
                focusing on areas that need improvement and mastering
                Olympiad-style questions.`}
              </span>
              <button
                type="button"
                className="bg-[#3cab7d] w-fit rounded-full sm:text-base text-white px-3 py-2 sm:px-6 sm:py-3  flex items-center gap-1 font-medium text-sm "
              >
                <Play size={20} />
                Start a quiz
              </button>
            </div>
            <div className="sm:w-1/3 flex flex-col gap-2">
              <Image alt="error" src={img1} className="h-full w-full" />
              <div className="flex justify-center sm:justify-end gap-3">
                <div className=" rounded-full border border-[#3cab7d] cursor-pointer">
                  <ChevronLeftIcon className="text-[#3cab7d] m-1" />
                </div>
                <div className=" rounded-full bg-[#3cab7d] cursor-pointer">
                  <ChevronRight className="text-white m-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image alt="" src={authbg} className="absolute w-full h-full" />
          <div className="p-6 flex flex-col  items-center  gap-4 ">
            <div className="flex flex-col gap-2 justify-center items-center">
              <span className="text-center text-xl font-semibold text-black">
                Testimonials
              </span>
              <span className="text-center text-sm font-medium">
                See What our students have to say about us
              </span>
            </div>

            <div className="flex gap-4 py-12 max-w-[95vw] overflow-x-auto">
              {testimonial &&
                testimonial.map((elem: any, idx : number) => (
                  <div key={idx} className="relative rounded-2xl h-fit min-w-full sm:min-w-64 w-96 flex flex-col gap-3 shadow-lg p-4 bg-white">
                    <Image
                      src={profile3}
                      alt=""
                      className="absolute -top-10 left-6"
                    />
                    <div className="flex justify-end items-center">
                      {elem.rate &&
                        Array.from({ length: Math.ceil(elem.rate) }).map(
                          (_, index) => (
                            <Image
                              src={rating}
                              alt={`Star ${index + 1}`}
                              key={index}
                            />
                          )
                        )}
                      {elem.rate &&
                        Array.from({ length: 5 - elem.rate }).map(
                          (_, index) => (
                            <Star
                              key={index}
                              size={16}
                              className="text-[#292828]"
                            />
                          )
                        )}
                    </div>

                    <span className="text-sm font-medium text-[#292828]">
                      {elem.feedback}
                    </span>
                    <div className="flex justify-between gap-2 items-center">
                      <div className="flex flex-col gap-1">
                        <span className="text-base font-semibold text-black">
                          {elem.creator.firstname} {elem.creator.lastname}
                        </span>
                        <span className="text-sm font-semibold text-[#706D6D]">
                          {elem.grade}
                        </span>
                      </div>
                      <div className="flex gap-1 pr-2">
                        <Image src={like} alt="" />
                        <span className="font-medium text-sm text-black">
                          {elem.likes.length}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}

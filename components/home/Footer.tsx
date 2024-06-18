import React from "react";
import Image from "next/image";
import Explore from "./Explore";
import More from "./More";
import Social from "./Social";
import { Link } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#3cab7d] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col   sm:flex-row justify-between ">
            <div className="flex justify-between w-full items-center">
              <div className="text-left">
                <Image
                  src={"/icons/icon.png"}
                  height={60}
                  width={80}
                  alt=""
                ></Image>
                <p className="mt-2 mb-[50px]">
                  Try the Live Classroom <br /> Programs
                </p>
              </div>
              <div className="">
                {" "}
                <div className="link flex sm:hidden flex-row gap-2 items-center ">
                  <Instagram size={22} />

                  <Linkedin size={22} />

                  <Facebook size={22} />

                  <Youtube size={22} />
                </div>
              </div>
            </div>
            <div className=" flex gap-10 justify-start sm:justify-between">
              <Explore />
              <More />
              <Social />
            </div>
          </div>
          <hr className="mt-5" />
          <p className="text-center mt-2">Copyright©2023 panini8</p>
        </div>
      </footer>
    </div>
  );
}

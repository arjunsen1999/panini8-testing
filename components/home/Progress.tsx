import React from "react";
import Image from "next/image";
export default function Progress() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full ">
        <div className="w-full sm:w-1/2 lg:w-2/5 bg-white p-4 rounded flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-center md:text-start">
            Track Your Progress
          </h1>
          <p className=" max-w-[300px] mt-4 text-center md:text-start">
            {" "}
            Use the progress tracking tools to stay motivated and witness your
            mathematical prowess grow!
          </p>
          <button
            type="button"
            className="bg-[#3cab7d] w-fit rounded-full text-base mt-10  text-white px-8 py-2  flex items-center gap-1 font-medium"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M6.23274 2.36497L18.0486 8.35081C19.7994 9.23997 20.0561 10.45 20.0561 11.0733C20.0561 11.6966 19.7994 12.8333 18.0486 13.75L6.23274 19.7175C5.73455 19.9791 5.18202 20.1204 4.6194 20.13C4.14181 20.1368 3.67185 20.0098 3.26274 19.7633C2.36491 19.1467 1.86226 18.0995 1.94274 17.0133V5.11497C1.85842 4.02805 2.36194 2.97905 3.26274 2.36497C4.18364 1.84188 5.31183 1.84188 6.23274 2.36497ZM5.40774 18.0583L17.2144 12.0725C17.8377 11.7516 18.2227 11.3483 18.2227 11.0275C18.2227 10.7066 17.8377 10.3033 17.2144 9.99164L5.37107 4.00581C5.12897 3.87218 4.85904 3.79685 4.58274 3.78581C4.45417 3.78936 4.32837 3.82396 4.21607 3.88664C3.88571 4.17399 3.72063 4.60732 3.77607 5.04164V17.0133C3.72063 17.4476 3.88571 17.881 4.21607 18.1683C4.60661 18.3337 5.05407 18.2924 5.40774 18.0583Z"
                fill="white"
              />
            </svg>
            Start a quiz
          </button>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/5 bg-white p-4 rounded ">
          <Image
            src="/icons/progress.png"
            width={1000}
            height={1000}
            className="w-full"
            alt="progress"
          />
        </div>
      </div>
    </div>
  );
}

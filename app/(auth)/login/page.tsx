import GoogleAuth from "@/components/Authglobal/GoogleAuth";
import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <div className="w-full">
        <div className="w-full pt-20 flex items-start justify-center">
          <div className="w-[466px]">
            <div className="w-full flex items-center justify-center mb-6">
              <Image
                src={"/icons/auth-logo.svg"}
                width={40}
                height={50}
                className="h-16 w-16"
                alt={"logo"}
              />
            </div>

            <div className="w-full  flex flex-col items-center justify-center gap-3 mb-6">
              <h1 className="text-3xl font-bold text-[#292828]">
                Welcome Back!
              </h1>
              <p className="text-base text-[#706D6D]">
                Sign In and start learning!
              </p>
            </div>

            <div className="w-full">
              <GoogleAuth content={"Sign in with Google"} />

              <div className="relative mb-4">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-3 text-[#D9D9D9] text-lg">
                    OR
                  </span>
                </div>
              </div>

              <div className="w-full">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

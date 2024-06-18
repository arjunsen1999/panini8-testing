"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInputComponent from "../inputs/TextInput.component";
import { makeRequest } from "@/lib/api";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/Auth";

const login = async (data: any) => {
  return await makeRequest("POST", "/api/v1/user/login", data);
};
export default function LoginForm() {
  const { setIsAuth }: any = useAuth((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const onSubmit = (data: any) => {
    setLoading(true);
    login(data)
      .then((res) => {
        toast.success("Successfully Login!");
        Cookie.set("access-token", res?.data?.accessToken);
        setIsAuth(res?.data?.accessToken);
        console.log(res.data.sGoalId);
        if (res.data.sGoalId) {
          navigate.push("/play");
        } else navigate.push("/");
      })
      .catch((error) => {
        console.log("error", error?.response?.data?.message);
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error("Something Went wrong");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <form className="w-full mb-20 flex flex-col gap-3">
      <div className="w-full">
        <TextInputComponent
          label={"Email"}
          name={"email"}
          type={"email"}
          register={register}
          errors={errors}
          required={true}
          placeholder="Enter your email"
          options={{
            required: "This field is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid Email",
            },
          }}
          className="py-3"
        />
      </div>

      <div className="w-full">
        <TextInputComponent
          label={"Password"}
          name={"password"}
          type={"password"}
          register={register}
          errors={errors}
          required={true}
          placeholder="Enter your password"
          className="py-3"
        />
      </div>

      <div className="w-full flex items-center justify-center flex-col gap-2">
        {loading ? (
          <Button className="w-full flex gap-2 rounded-full bg-[#59B792] text-white text-base font-semibold">
            <Loader className="text-white animate-spin" />
            Loading...
          </Button>
        ) : (
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full rounded-full bg-[#59B792] text-white text-base font-semibold"
          >
            Sign In
          </Button>
        )}
        <p className="text-[#292828]">
          Don’t have an account?{" "}
          <Link href={"/signup"} className="text-[#59B792] font-semibold">
            Sign Up
          </Link>
        </p>
        <p className="text-center text-[#292828] text-sm">
          We never share your information with anyone, we only collect
          information to suggest relevant content
        </p>
      </div>
    </form>
  );
}

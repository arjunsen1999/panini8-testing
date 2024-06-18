"use client";
import React, { useState } from "react";
import TextInputComponent from "../inputs/TextInput.component";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import Link from "next/link";
import { makeRequest } from "@/lib/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { Loader } from "lucide-react";

const signup = async (data: any) => {
  return await makeRequest("POST", "/api/v1/user/register", data);
};
export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    setLoading(true);
    console.log("data", data);
    signup(data)
      .then((res) => {
        toast.success("Successfully Login!");
        Cookie.set("access-token", res?.data?.accessToken);
        navigate.push("/login");
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

      <div className="w-full grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <TextInputComponent
            label={"First Name"}
            name={"firstname"}
            type={"text"}
            register={register}
            errors={errors}
            required={true}
            placeholder="Enter your First Name"
            className="py-3"
          />
        </div>
        <div className="col-span-1">
          <TextInputComponent
            label={"Last Name"}
            name={"lastname"}
            type={"text"}
            register={register}
            errors={errors}
            required={true}
            placeholder="Enter your Last Name"
            className="py-3"
          />
        </div>
      </div>

      <div className="w-full">
        <TextInputComponent
          label={"Age"}
          name={"age"}
          type={"number"}
          register={register}
          errors={errors}
          required={true}
          placeholder="Enter your Age"
          className="py-3"
        />
      </div>

      <div className="w-full">
        <TextInputComponent
          label={"Country"}
          name={"country"}
          type={"text"}
          register={register}
          errors={errors}
          required={true}
          placeholder="Enter your Country"
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
            Sign Up
          </Button>
        )}
        <p className="text-[#292828]">
          Already have an account?{" "}
          <Link href={"/login"} className="text-[#59B792] font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}

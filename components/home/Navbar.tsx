import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import Cookie from "js-cookie";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useAuth } from "@/store/Auth";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Navbar() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const { isAuth }: any = useAuth((state) => state);
  return (
    <div>
      <nav className="sm:mt-5">
        <div className="mx-auto ">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Image
                height={2000}
                width={2000}
                className="h-12 w-auto cursor-pointer"
                src="/icons/icon.jpg"
                alt="Logo"
              />
            </div>
            <div className="">
              {isAuth ? (
                <div className="ml-10 flex items-center gap-4 space-x-4">
                  <Link
                    href="/play"
                    className="hover:text-[#3cab7d] max-sm:hidden"
                  >
                    Play
                  </Link>
                  <Link
                    href="/progress"
                    className="hover:text-[#3cab7d] max-sm:hidden"
                  >
                    Progress
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Link
                        className="hover:text-[#3cab7d] flex items-center max-sm:hidden"
                        href={"#"}
                      >
                        More
                        <ChevronDown />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Option1
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Option2
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Option3
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Image
                    className="max-sm:hidden"
                    src={"/icons/pic.png"}
                    height={40}
                    width={40}
                    alt=""
                  ></Image>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Image
                        className="hidden max-sm:flex"
                        src={"/icons/pic.png"}
                        height={40}
                        width={40}
                        alt=""
                      ></Image>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Option1
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Option2
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Option3
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/login"
                    className="bg-[#3cab7d] rounded-full lg:text-base  text-white px-4 sm:px-8 py-2 text-sm  font-medium  "
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="text-[#3cab7d] rounded-full lg:text-base text-sm border-2 border-[#3cab7d] hover:bg-[#3cab7d]   hover:text-white px-4 sm:px-8 py-2  font-medium "
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

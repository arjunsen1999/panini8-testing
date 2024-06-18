"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

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

type Checked = DropdownMenuCheckboxItemProps["checked"];
export default function Navshow() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div>
      <nav className="mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Image
                className="h-12 w-auto max-sm:h-9"
                src={"/icons/icon.jpg"}
                height={2000}
                width={2000}
                alt="Logo"
              ></Image>
            </div>
            <div className="">
              <div className="ml-10 flex items-center gap-4 space-x-4">
                <Link href="#" className="hover:text-[#3cab7d] max-sm:hidden">
                  Play
                </Link>
                <Link href="#" className="hover:text-[#3cab7d] max-sm:hidden">
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

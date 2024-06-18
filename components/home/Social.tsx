import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
export default function Social() {
  return (
    <div className="flex-col hidden sm:flex">
      <h1 className="font-bold">Social</h1>
      <div className="link flex flex-row gap-2">
        <Link className="hover:text-black" href={""}>
          <Instagram size={16} />
        </Link>
        <Link className="hover:text-black" href={""}>
          <Linkedin size={16} />
        </Link>
        <Link className="hover:text-black" href={""}>
          <Facebook size={16} />
        </Link>
        <Link className="hover:text-black" href={""}>
          <Youtube size={16} />
        </Link>
      </div>
    </div>
  );
}

import Navbar from "@/components/home/Navbar";
import React, { Suspense } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <div className="sm:px-16 px-6 py-2">
        <Navbar />
      </div>
      <Suspense>
        <div>{children}</div>
      </Suspense>
    </div>
  );
}

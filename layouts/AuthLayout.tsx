import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url("/icons/auth-background.svg")` }}
    >
      {children}
    </div>
  );
}

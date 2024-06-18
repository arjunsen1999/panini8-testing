"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import AskQuestionLayout from "@/layouts/AskQuestionLayout";
import HomeLayout from "@/layouts/HomeLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import SessionProvider from "@/hoc/SessionProvider";
import Cookies from "js-cookie";
import { useAuth } from "@/store/Auth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isAskQuestion = pathname === "/askquestion";
  const isAddQuestion = pathname === "/askquestion/add-question";
  const isQuestionDetails = pathname === "/askquestion/question-details";
  const isMore = pathname === "/more";

  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";

  useEffect(() => {
    // Any necessary client-side logic based on route change
  }, [pathname]);

  const { setIsAuth }: any = useAuth((state) => state);

  useEffect(() => {
    const accessToken = Cookies.get("access-token");

    setIsAuth(accessToken);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {isAskQuestion || isAddQuestion || isQuestionDetails || isMore ? (
            <AskQuestionLayout>{children}</AskQuestionLayout>
          ) : isLogin || isSignup ? (
            <AuthLayout>{children}</AuthLayout>
          ) : (
            <HomeLayout>{children}</HomeLayout>
          )}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            draggable
            pauseOnHover
            style={{ zIndex: 10000 }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}

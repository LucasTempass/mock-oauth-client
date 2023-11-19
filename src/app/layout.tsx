import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { CgPathIntersect } from "react-icons/cg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Summarize your notes with Summarizer",
  title: "Summarize",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} h-screen overflow-hidden flex flex-col`}
        >
          <header className="flex items-center shadow-sm justify-center w-full p-4">
            <div className="max-w-4xl w-full flex justify-between items-center">
              <CgPathIntersect className="text-lime-950 text-4xl" />
              <UserButton />
            </div>
          </header>

          <main className="flex flex-1 overflow-y-auto flex-col items-center px-24 py-12 space-y-12">
            <h1 className="text-4xl font-bold">
              Summarize your notes with{" "}
              <b className="font-extrabold text-lime-950">Summarizer</b>
            </h1>

            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-xl text-center ">
                Summarizer is a tool that summarizes your notes in a few
                sentences.
                <br />
                It uses AI to understand their context and extract the most
                relevant and important information.
              </p>
            </div>

            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

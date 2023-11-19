import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Summarize your notes with Summarizer",
  title: "Summarize",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24 space-y-12">
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
  );
}

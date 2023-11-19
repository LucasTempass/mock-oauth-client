"use client";

import { Button } from "@/components/Button";

export function SummarizeButton() {
  return (
    <Button
      className="w-full"
      onClick={() => {
        alert("This feature is not yet available.");
      }}
    >
      Summarize
    </Button>
  );
}

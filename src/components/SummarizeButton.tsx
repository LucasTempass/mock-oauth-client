"use client";

import { Button } from "@/components/Button";

export function SummarizeButton() {
  return (
    <Button
      className="w-full"
      onClick={() => {
        alert("Está funcionalidade não está disponível no momento.");
      }}
    >
      Summarize
    </Button>
  );
}

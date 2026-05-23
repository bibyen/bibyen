"use client";

import { useState } from "react";
import Image from "next/image";
import { QuestionSection } from "./components/QuestionSection";
import { SuccessSection } from "./components/SuccessSection";

export default function BatoBatoApp() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState<"typing" | "correct" | "wrong">(
    "typing",
  );

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. SET THE REAL WINNER'S NAME HERE
    const theWinner = "vyv";

    if (answer.toLowerCase().trim() === theWinner) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* 2. BACKGROUND IMAGE: Ensure background.png is in your /public folder */}
      <Image
        src="background.png"
        alt="Background"
        fill
        className="object-cover opacity-80"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-center">
        {status !== "correct" ? (
          <QuestionSection
            answer={answer}
            setAnswer={setAnswer}
            status={status}
            setStatus={setStatus}
            checkAnswer={checkAnswer}
          />
        ) : (
          <SuccessSection />
        )}
      </div>
    </main>
  );
}

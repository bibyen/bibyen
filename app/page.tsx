"use client";

import { useState } from "react";
import Image from "next/image";

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
      {/* 2. BACKGROUND IMAGE: Ensure IMG_4024.png is in your /public folder */}
      <Image
        src="IMG_4024.png"
        alt="Background"
        fill
        className="object-cover opacity-80"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-center">
        {status !== "correct" ? (
          <div className="flex flex-col items-center gap-8">
            {/* BIG, BOLD, NARROW TEXT */}
            <h1 className="text-white text-3xl font-black tracking-tighter leading-[0.85] max-w-[200px]">
              Hi Vincent, who won the second game of bato bato pik?
            </h1>

            <form
              onSubmit={checkAnswer}
              className="flex flex-col items-center gap-4"
            >
              <input
                type="text"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                  if (status === "wrong") setStatus("typing");
                }}
                className="w-[220px] rounded-full bg-white/10 border border-white/30 px-5 py-2 text-white outline-none backdrop-blur-md focus:border-white/60 transition-all text-center"
                placeholder="type answer here..."
              />

              <button
                type="submit"
                className="text-white/40 text-[10px] font-bold tracking-[0.3em]"
              >
                press enter to submit
              </button>
            </form>

            {status === "wrong" && (
              <p className="text-white text-sm font-medium animate-bounce">
                try again? : )
              </p>
            )}
          </div>
        ) : (
          /* 3. SUCCESS STATE: Pop-up image */
          <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl">
              <Image
                src="IMG_4025.png"
                alt="Success"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-8 font-black text-white text-3xl uppercase tracking-tighter italic">
              Great Memory!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

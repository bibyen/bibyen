"use client";

import { FormEvent } from "react";


interface QuestionSectionProps {
  answer: string;
  setAnswer: (answer: string) => void;
  status: "typing" | "correct" | "wrong";
  setStatus: (status: "typing" | "correct" | "wrong") => void;
  checkAnswer: (e: FormEvent) => void;
}

export function QuestionSection({
  answer,
  setAnswer,
  status,
  setStatus,
  checkAnswer,
}: QuestionSectionProps) {
  return (
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
  );
}

"use client";

import Image from "next/image";

export function SuccessSection() {
  return (
    <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
      <div className="relative h-80 w-80 overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl">
        <Image
          src="winner.png"
          alt="Success"
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-8 font-black text-white text-3xl uppercase tracking-tighter italic">
        Great Memory!
      </p>
    </div>
  );
}

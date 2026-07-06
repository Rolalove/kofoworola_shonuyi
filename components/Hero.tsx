"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] glow-bg bg-accent/15" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] glow-bg bg-cyan-700/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content (Left) */}
          <div
            className={`lg:col-span-7 flex flex-col items-start transition-all duration-1000 transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Subtitle (Moved Up) */}
            <h2 className="text-zinc-200 text-lg md:text-[20px] font-(family-name:--font-space-grotesk) mb-6">
              Frontend & Mobile Engineer
            </h2>

            {/* Main Heading */}
            <h1 className="text-[64px] sm:text-[80px] md:text-[100px] font-serif font-medium tracking-tight leading-[0.95] text-white/95 mb-8">
              Kòfowórọlá
              <span className="block text-accent">Shonuyi.</span>
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-[15px] font-sans max-w-[480px] mb-10 leading-[1.7]">
              I craft high-performance web systems and cross-platform mobile
              apps that feel as good as they perform a scientist&apos;s
              precision meeting a designer&apos;s obsession with what actually
              matters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={() => handleScrollTo("work")} variant="primary">
                View my work
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-45"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
              <Button
                onClick={() => handleScrollTo("contact")}
                variant="secondary"
              >
                Let&apos;s talk
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Hero Portrait Card (Right) */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative group w-full max-w-[380px] aspect-4/5 rounded-2xl overflow-hidden glass-card p-2 shadow-2xl">
              {/* Inner container with borders */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950/40 border border-zinc-900">
                <Image
                  src="/kofoworola.JPG"
                  alt="Kọ́fọwọ́rọlá Shonuyi"
                  fill
                  priority
                  sizes="(max-w-770px) 100vw, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale hover:grayscale-0"
                />

                {/* Visual grid / tech overlay for premium look */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                {/* Subtle text label inside image */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <div className="text-zinc-400 font-(family-name:--font-dm-mono) text-[10px] tracking-[0.2em] uppercase font-medium drop-shadow-md">
                    Lagos, NG
                  </div>
                </div>
              </div>

              {/* Glowing accent border effect */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/30 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

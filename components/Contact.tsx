"use client";
import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("skofoworola3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative border-t border-zinc-900">
      <div className="px-6 md:px-[95.62px] py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          {/* Section Header */}
          <SectionHeader
            number="03"
            title="Contact"
            className="mb-[64px]"
            numberClassName="!text-accent"
          />

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 justify-between">
            {/* Left side */}
            <div className="flex-1 max-w-[684px] flex flex-col">
              <h2 className="text-[48px] md:text-[75px] font-serif font-medium leading-[1.05] tracking-tight mb-10">
                <span className="text-zinc-400">Good products start with</span>
                <span className="text-white"> a conversation.</span>
              </h2>

              <div className="flex flex-col items-start gap-4">
                <a
                  href="mailto:skofoworola3@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-zinc-950 rounded-full text-[13px] font-(family-name:--font-space-grotesk) font-medium hover:bg-cyan-400 transition-colors"
                >
                  Start a conversation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-zinc-500 text-[13px] font-(family-name:--font-dm-mono)">
                  I respond to every message.
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-8 pt-2">
              {/* Email */}
              <div className="flex flex-col gap-3">
                <span className="text-zinc-500 text-[10px] font-(family-name:--font-dm-mono) uppercase tracking-[2.8px]">
                  Email
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:skofoworola3@gmail.com"
                    className="text-accent text-[15px] font-(family-name:--font-space-grotesk) hover:opacity-80 transition-opacity"
                  >
                    skofoworola3@gmail.com
                  </a>
                  <div className="relative flex items-center">
                    <button
                      onClick={copyEmail}
                      className="w-7 h-7 flex items-center justify-center bg-zinc-900 rounded border border-zinc-800 hover:bg-zinc-800 transition-colors group"
                      title="Copy email"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-400 transition-colors" />
                      )}
                    </button>
                    <div
                      className={`absolute left-full ml-2 px-2 py-1 bg-zinc-800 text-zinc-200 font-(family-name:--font-space-grotesk) text-[11px] rounded pointer-events-none transition-all duration-300 ${
                        copied
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-1"
                      }`}
                    >
                      Copied!
                    </div>
                  </div>
                </div>
              </div>

              {/* Find me on */}
              <div className="flex flex-col gap-3">
                <span className="text-zinc-500 text-[10px] font-(family-name:--font-dm-mono) uppercase tracking-[2.8px]">
                  Find me on
                </span>
                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="text-zinc-400 text-[14px] font-(family-name:--font-space-grotesk) hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-zinc-400 text-[14px] font-(family-name:--font-space-grotesk) hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="text-zinc-400 text-[14px] font-(family-name:--font-space-grotesk) hover:text-white transition-colors"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

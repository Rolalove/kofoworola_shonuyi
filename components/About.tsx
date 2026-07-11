import { SectionHeader } from "./ui/SectionHeader";
import { INFO_CARDS, TECH_STACK } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="relative border-t border-zinc-900">
      <div className="px-6 md:px-[95.62px] py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <SectionHeader number="01" title="About" />

          <div className="pt-5">
            <h2 className="text-white text-4xl md:text-[48px] font-serif font-semibold leading-[1.05]">
              The craft behind the code.
            </h2>
          </div>

          {/* Content: Bio + Info Cards */}
          <div className="pt-16 flex flex-col lg:flex-row gap-16">
            {/* Left — Bio Paragraphs */}
            <div className="flex-1 max-w-[796px] flex flex-col gap-5">
              <p className="text-zinc-400 text-base font-sans leading-7">
                My journey into engineering began not in a computer lab, but a
                chemistry classroom. A background in{" "}
                <span className="text-zinc-300">Chemistry Education </span> gave
                me a scientist&apos;s rigour, a love of systems, precision, and
                understanding exactly why things behave the way they do.
              </p>
              <p className="text-zinc-400 text-base font-sans leading-7">
                That analytical lens translated naturally into software. I
                became fascinated by the craft of the front-of-stack: where
                logic meets aesthetics, and a well-structured component is as
                satisfying as a balanced equation.
              </p>
              <p className="text-zinc-400 text-base font-sans leading-7">
                Today I build{" "}
                <span className="text-zinc-300">pixel-perfect interfaces</span>,{" "}
                <span className="text-zinc-300">clean architecture</span>, and{" "}
                <span className="text-zinc-300">
                  cross-platform mobile experiences,
                </span>{" "}
                always optimising for the human on the other side of the screen.
              </p>
            </div>

            {/* Right — Info Cards */}
            <div className="w-full lg:w-[300px] flex flex-col gap-3 shrink-0">
              {INFO_CARDS.map((card, idx) =>
                card.isActive ? (
                  <div key={idx} className="info-card-active">
                    <div className="flex items-center gap-2">
                      <span className="pulse-dot" />
                      <span className="info-card-label text-accent!">
                        {card.label}
                      </span>
                    </div>
                    <div className="info-card-value">{card.value}</div>
                  </div>
                ) : (
                  <div key={idx} className="info-card">
                    <div className="info-card-label">{card.label}</div>
                    <div className="info-card-value">{card.value}</div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Technical Stack Sub-section */}
          <div className="pt-12">
            <div className="pt-10 border-t border-zinc-900">
              {/* Sub-header */}
              <div className="flex items-center gap-3">
                <span className="section-separator" />
                <span className="section-name">Technical Stack</span>
              </div>

              {/* Stack Cards Grid */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {TECH_STACK.map((stack, idx) => (
                  <div key={idx} className="tech-card flex flex-col gap-3">
                    <div
                      className={`w-6 h-0.5 rounded-full ${stack.colorClass}`}
                    />
                    <div className="tech-card-title">{stack.category}</div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {stack.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

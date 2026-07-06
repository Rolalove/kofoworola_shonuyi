"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { ProjectData, MAIN_PROJECTS, MINOR_PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-zinc-900">
      <div className="px-6 md:px-[95.62px] py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <SectionHeader number="02" title="Selected Work" />

          <div className="pt-5">
            <h2 className="text-white text-4xl md:text-[48px] font-serif font-semibold leading-[1.05]">
              Things I&apos;ve built.
            </h2>
          </div>

          {/* Project Cards */}
          <div className="pt-16 flex flex-col gap-4">
            {MAIN_PROJECTS.map((project, idx) => (
              <MainProjectCard key={idx} project={project} />
            ))}
          </div>

          {/* ─── Other Notable Projects ─── */}
          <div className="pt-24">
            <div className="pt-10 border-t border-zinc-900">
              <div className="flex items-center gap-3 mb-6">
                <span className="section-separator" />
                <span className="section-name">Other Notable Projects</span>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {MINOR_PROJECTS.map((project, idx) => (
                  <MinorProjectCard
                    key={idx}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    href={project.href}
                    imageSrc={project.imageSrc}
                    category={project.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrowserMockup({
  url,
  imageSrc,
  alt,
}: {
  url: string;
  imageSrc: string;
  alt: string;
}) {
  return (
    <div className="browser-chrome w-full max-w-[600px] overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-3.5 py-3 bg-zinc-950 border-b border-zinc-900">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <div className="flex-1 pl-3">
          <div className="browser-url-bar w-full max-w-[430px]">{url}</div>
        </div>
      </div>
      <div className="w-full bg-zinc-950">
        <Image
          src={imageSrc}
          alt={alt}
          width={1200}
          height={800}
          sizes="(max-w-768px) 100vw, 600px"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

function MainProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="project-card">
      <div
        className={`flex flex-col ${project.reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        <div className="p-8 md:p-10 flex flex-col gap-6 lg:w-[55%]">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="section-number">{project.number}</span>
            <span className="w-6 h-px bg-zinc-800" />
            <span className="section-name">{project.category}</span>
            {project.isBuilding && (
              <div className="flex items-center gap-1.5 ml-4">
                <span className="pulse-dot" />
                <span className="text-accent text-[11px] font-(family-name:--font-dm-mono) leading-[16.5px]">
                  building
                </span>
              </div>
            )}
          </div>

          <h3 className="text-white text-3xl md:text-[43.71px] font-serif font-semibold leading-[1.05]">
            {project.title}
          </h3>

          <p className="text-zinc-300 text-base font-sans leading-[26.4px] max-w-[480px]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  idx === 0
                    ? "inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-zinc-950 rounded-full text-xs font-(family-name:--font-space-grotesk) font-semibold hover:bg-cyan-400 transition-colors shadow-[0_4px_15px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    : "inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full text-xs font-(family-name:--font-space-grotesk) font-medium hover:bg-zinc-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                }
              >
                {link.label}
                <span aria-hidden="true">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:w-[45%] p-6 md:p-10 flex items-center justify-center">
          <BrowserMockup
            url={project.mockup.url}
            imageSrc={project.mockup.imageSrc}
            alt={project.mockup.alt}
          />
        </div>
      </div>
    </div>
  );
}

function MinorProjectCard({
  title,
  description,
  tags,
  href,
  imageSrc,
  category,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageSrc?: string;
  category?: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col sm:flex-row items-center gap-4 p-4 bg-zinc-950 rounded-xl border border-zinc-900 hover:bg-zinc-950 hover:border-accent/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {/* Image Section */}
      <div className="shrink-0 w-full sm:w-[160px] aspect-16/10 bg-zinc-900 rounded-lg p-2 flex items-center justify-center">
        {imageSrc ? (
          <div className="relative w-full h-full overflow-hidden rounded border border-zinc-800">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 160px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-medium">
            No Image
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col min-w-0 w-full py-1">
        <div className="flex items-start justify-between mb-1">
          {category && (
            <span className="text-accent font-sans font-medium text-xs mb-1">
              {category}
            </span>
          )}
          <ExternalLink
            className="w-4 h-4 text-zinc-600 group-hover:text-accent transition-colors ml-auto shrink-0"
            aria-hidden="true"
          />
        </div>

        <h4 className="text-white text-xl md:text-2xl font-serif font-semibold mb-2 group-hover:text-accent transition-colors truncate">
          {title}
        </h4>

        <p className="text-zinc-400 text-xs font-sans leading-relaxed mb-4 line-clamp-2 max-w-2xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-zinc-400 bg-transparent px-2.5 py-1 rounded border border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

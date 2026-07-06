import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export type ProjectData = {
  number: string;
  category: string;
  isBuilding?: boolean;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string; icon: React.ReactNode }[];
  mockup: { url: string; imageSrc: string; alt: string };
  reversed?: boolean;
};

export const MAIN_PROJECTS: ProjectData[] = [
  {
    number: "01",
    category: "Career Tech · In Development",
    isBuilding: true,
    title: "DevTrackIt",
    description:
      "Replaces clunky spreadsheets and heavy desktop extensions with an automated email-parsing engine, allowing users to update their entire job pipeline just by forwarding a recruiter's email.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    links: [
      {
        label: "View project",
        href: "https://www.devtrackit.com/",
        icon: <ArrowUpRight className="w-3.5 h-3.5" />,
      },
      {
        label: "View walkthrough",
        href: "#",
        icon: <ExternalLink className="w-3 h-3" />,
      },
    ],
    mockup: {
      url: "https://www.devtrackit.com/",
      imageSrc: "/devtrackit.png",
      alt: "DevTrackIt Platform",
    },
  },
  {
    number: "02",
    category: "E-Commerce",
    title: "Joy Fashion Island",
    description:
      "A premium e-commerce showroom and inventory engine designed for Joy Fashion Island to display and sell high-quality fabrics and textiles. The platform pairs an intentional, sensory front-end showcase with a robust, custom administrative backend for real-time inventory and order management.",
    tags: ["MedusaJS", "Next.js", "TypeScript", "Supabase", "Paystack"],
    links: [
      {
        label: "View project",
        href: "#",
        icon: <ArrowUpRight className="w-3.5 h-3.5" />,
      },
      {
        label: "View walkthrough",
        href: "#",
        icon: <ExternalLink className="w-3 h-3" />,
      },
    ],
    mockup: {
      url: "joyfashionisland.com",
      imageSrc: "/devtrackit.png",
      alt: "Joy Fashion Island",
    },
    reversed: true,
  },
  {
    number: "03",
    category: "Education Management System",
    title: "Dee Unique International School",
    description:
      "Serving as a digital hub for a world-class learning institution spanning from Nursery to Secondary education. The site emphasizes a balance between high academic achievement and robust character development.",
    tags: ["Next.js", "TypeScript"],
    links: [
      {
        label: "View project",
        href: "https://dee-unique.vercel.app/",
        icon: <ArrowUpRight className="w-3.5 h-3.5" />,
      },
      {
        label: "View walkthrough",
        href: "#",
        icon: <ExternalLink className="w-3 h-3" />,
      },
    ],
    mockup: {
      url: "https://dee-unique.vercel.app/",
      imageSrc: "/dee-unique.png",
      alt: "Dee Unique International School",
    },
  },
];

export const MINOR_PROJECTS = [
  {
    title: "PayFlex",
    category: "FinTech",
    description: "Escrow platform for freelancer",
    tags: ["Next.js", "NextAuth", "Prisma"],
    href: "#",
    imageSrc: "/devtrackit.png",
  },

  {
    title: "Portfolio v1",
    category: "Personal Site",
    description:
      "My previous portfolio website built with HTML, CSS, and vanilla JS. Minimalist design with smooth transitions.",
    tags: ["HTML", "CSS", "Javascript"],
    href: "#",
    imageSrc: "/dee-unique.png",
  },
];

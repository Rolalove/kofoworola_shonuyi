# Kòfowórọlá Shonuyi — Frontend & Mobile Engineer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A high-performance, meticulously designed personal portfolio built to showcase engineering rigor, system design, and front-of-stack expertise.

## 🏗 Architecture & Code Structure

The codebase follows a strict **Component-Driven Architecture** with a strong emphasis on **Separation of Concerns (SoC)** and **DRY (Don't Repeat Yourself)** principles.

While large enterprise applications often use a strict Feature-Domain approach, this application leverages Next.js App Router conventions combined with Atomic Design principles, which is the industry standard for high-performance static/SSG sites.

### Directory Structure

```text
├── app/                  # Next.js App Router (Page assembly, Layouts, Metadata)
│   ├── globals.css       # Global design tokens and Tailwind configuration
│   └── page.tsx          # Main entry point composing high-level sections
├── components/           # Domain-specific functional components
│   ├── About.tsx         # About section (bio, background)
│   ├── Contact.tsx       # Contact section (email parsing, social links)
│   ├── Footer.tsx        # Global footer
│   ├── Hero.tsx          # Landing section with dynamic typography
│   ├── Projects.tsx      # Project showcase (data-driven mapping)
│   └── ui/               # Reusable, atomic UI elements
│       ├── BrandIcons.tsx    # Extracted SVG brand assets
│       ├── Button.tsx        # Unified call-to-action button
│       └── SectionHeader.tsx # Standardized section headers
├── data/                 # Static data and configuration
│   ├── about.ts          # Bio and experience timeline
│   └── projects.tsx      # Project data arrays and mockups
├── public/               # Static assets (images, fonts)
```

### Engineering Highlights

1. **Data-Driven UI**: Complex sections like `Projects.tsx` map over structured data arrays (`MAIN_PROJECTS`, `MINOR_PROJECTS`) rather than hardcoding JSX, ensuring the UI remains declarative and easy to scale.
2. **Atomic UI Components**: Recurring patterns (like `SectionHeader` and mockups) are isolated into pure, functional components to avoid repetitive code and maintain visual consistency.
3. **Semantic HTML & Accessibility**: Built with a focus on proper document structure, contrast ratios, and responsive design systems.
4. **Performance Optimized**: Leverages Next.js `next/image` for automatic layout shifts (CLS) prevention, lazy loading, and WebP optimization.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com)

## 💻 Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤝 Let's Connect

Good products start with a conversation. Feel free to reach out:

- **Email:** [skofoworola3@gmail.com](mailto:skofoworola3@gmail.com)
- **LinkedIn:** [Kofoworola Shonuyi](https://linkedin.com/in/kofoworola-shonuyi-647835220/)
- **GitHub:** [@kofoworola](https://github.com/Rolalove)

---

_Designed & coded with precision._

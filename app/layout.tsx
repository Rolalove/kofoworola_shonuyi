import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  DM_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kofoworolashonuyi.com"),
  title: "Kòfowórọlá Shonuyi | Frontend & Mobile Engineer",
  description:
    "Kòfowórọlá Shonuyi is a Frontend & Mobile Engineer crafting high-performance web systems and cross-platform apps using React, React Native, and Flutter.",
  keywords: [
    "Kofoworola Shonuyi",
    "Frontend Engineer",
    "Mobile Developer",
    "Next.js Portfolio",
    "React Developer",
    "React Native",
    "Flutter",
  ],
  authors: [{ name: "Kòfowórọlá Shonuyi" }],
  creator: "Kòfowórọlá Shonuyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kofoworolashonuyi.com",
    title: "Kòfowórọlá Shonuyi | Frontend & Mobile Engineer",
    description:
      "Kòfowórọlá Shonuyi is a Frontend & Mobile Engineer crafting high-performance web systems and cross-platform apps using React, React Native, and Flutter.",
    siteName: "Kòfowórọlá Shonuyi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kòfowórọlá Shonuyi | Frontend & Mobile Engineer",
    description:
      "Kòfowórọlá Shonuyi is a Frontend & Mobile Engineer crafting high-performance web systems and cross-platform apps using React, React Native, and Flutter.",
  },
  alternates: {
    canonical: "https://kofoworolashonuyi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dmMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 font-sans selection:bg-accent/20 selection:text-accent">
        {children}
      </body>
    </html>
  );
}

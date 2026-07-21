"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Contact", id: "contact" },
    {
      label: "Résumé",
      id: "resume",
      href: "/resume",
    },
  ];

  // Track scrolling to add backdrop blur and highlight correct section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = ["home", "about", "work", "experience", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="group flex items-center transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          <div
            className="h-10 md:h-12 w-[180px] md:w-[220px] bg-accent transition-colors"
            style={{
              WebkitMaskImage: "url('/kofoworola-logo.svg')",
              maskImage: "url('/kofoworola-logo.svg')",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "left center",
              maskPosition: "left center",
            }}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isExternal = !!item.href;
            return (
              <Link
                key={item.id}
                href={item.href || `#${item.id}`}
                onClick={
                  isExternal ? undefined : (e) => handleNavClick(e, item.id)
                }
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`text-sm tracking-wide font-sans transition-colors relative py-1 hover:text-white ${
                  activeSection === item.id
                    ? "text-accent font-medium"
                    : "text-zinc-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/55 rounded-lg transition-colors cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-nav border-t border-zinc-900/50 transition-all duration-300 origin-top overflow-hidden ${
          isOpen ? "max-h-[300px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {navItems.map((item) => {
            const isExternal = !!item.href;
            return (
              <Link
                key={item.id}
                href={item.href || `#${item.id}`}
                onClick={
                  isExternal
                    ? () => setIsOpen(false)
                    : (e) => handleNavClick(e, item.id)
                }
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`text-base font-sans py-2 border-b border-zinc-900/40 last:border-0 ${
                  activeSection === item.id
                    ? "text-accent font-medium"
                    : "text-zinc-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

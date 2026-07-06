import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-(family-name:--font-space-grotesk) font-medium transition-all active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const variants = {
    primary:
      "bg-accent text-zinc-950 hover:bg-cyan-400 shadow-[0_4px_20px_rgba(34,211,238,0.25)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.4)] focus-visible:ring-accent",
    secondary:
      "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 shadow-sm focus-visible:ring-zinc-600",
    link: "text-accent hover:text-cyan-400 p-0 bg-transparent shadow-none hover:shadow-none font-normal text-sm gap-1.5 border-b border-transparent hover:border-accent",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

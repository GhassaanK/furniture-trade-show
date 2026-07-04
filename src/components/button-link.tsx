import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-gold text-cream shadow-[0_18px_42px_rgba(26,35,27,0.16)] hover:-translate-y-0.5 hover:bg-olive hover:text-cream hover:shadow-[0_22px_54px_rgba(26,35,27,0.24)]",
    secondary:
      "border border-olive/25 text-olive hover:-translate-y-0.5 hover:border-olive hover:bg-olive hover:text-cream",
    light:
      "border border-cream/30 text-cream hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-cream",
  };

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center overflow-hidden rounded-[14px] px-6 text-sm font-bold uppercase tracking-[0.08em] transition duration-300 ${styles[variant]} ${className}`}
    >
      <span className="transition duration-300 group-hover:tracking-[0.12em]">{children}</span>
    </Link>
  );
}

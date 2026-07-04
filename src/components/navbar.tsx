"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/site";
import { ButtonLink } from "./button-link";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 8) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 96) {
        setVisible(false);
        setOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-olive/10 bg-cream/94 backdrop-blur-xl transition-transform duration-300 ease-out ${
        visible || open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:px-10">
        <Link href="/" className="group flex items-center gap-4">
          <Image
            src="/logo.jpeg"
            alt="Pakistan's 1st Furniture Trade Show logo"
            width={62}
            height={62}
            className="h-14 w-14 object-cover ring-1 ring-olive/10 transition duration-500 group-hover:scale-95"
            priority
          />
          <span className="hidden font-montserrat text-sm font-black uppercase leading-tight tracking-[0.16em] text-olive sm:block">
            Pakistan&apos;s 1st
            <span className="block text-[11px] font-semibold tracking-[0.3em] text-gold">
              Furniture Trade Show
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="premium-link text-[13px] font-bold uppercase tracking-[0.14em] text-olive/72 transition hover:text-olive"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/book-booth" variant="secondary" className="min-h-11 px-5">
            Book a Booth
          </ButtonLink>
          <ButtonLink href="/register" className="min-h-11 px-5">
            Register Free
          </ButtonLink>
        </div>

        <button
          className="flex h-11 min-w-20 items-center justify-center border border-olive/15 px-3 text-olive transition hover:border-gold hover:text-gold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xs font-black uppercase tracking-[0.12em]">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-olive/10 bg-cream transition-all duration-500 lg:hidden ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-5 sm:px-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-olive/10 py-4 text-sm font-black uppercase tracking-[0.14em] text-olive"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <ButtonLink href="/register">Register Free</ButtonLink>
            <ButtonLink href="/book-booth" variant="secondary">
              Book a Booth
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingButtons() {
  const [showMobileRegister, setShowMobileRegister] = useState(false);

  useEffect(() => {
    const update = () => setShowMobileRegister(window.scrollY > window.innerHeight * 0.6);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <Link
        href="/register"
        className={`fixed bottom-4 left-4 z-40 flex min-h-12 items-center justify-center rounded-[14px] bg-gold px-5 text-sm font-black uppercase tracking-[0.08em] text-cream shadow-xl transition duration-300 hover:bg-olive md:hidden ${
          showMobileRegister
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Register Free
      </Link>
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-olive text-sm font-black text-cream shadow-xl ring-1 ring-cream/20 transition hover:-translate-y-0.5 hover:bg-gold"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
    </>
  );
}

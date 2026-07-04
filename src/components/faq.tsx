"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export function FAQList({ limit }: { limit?: number }) {
  const [active, setActive] = useState(0);
  const list = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="grid gap-3">
      {list.map((item, index) => {
        const open = active === index;
        return (
          <article
            key={item.question}
            className="surface overflow-hidden rounded-2xl transition duration-300 hover:border-gold/45"
          >
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-montserrat text-lg font-bold text-olive transition hover:text-gold"
              onClick={() => setActive(open ? -1 : index)}
              aria-expanded={open}
            >
              {item.question}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold bg-gold text-cream">
                {open ? "-" : "+"}
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <p className="px-5 pb-5 leading-7 text-olive/68">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

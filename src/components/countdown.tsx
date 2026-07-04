"use client";

import { useEffect, useState } from "react";

const target = new Date("2026-08-07T10:00:00+05:00").getTime();

function getTimeLeft() {
  const diff = Math.max(target - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeLeft()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-y border-olive/10 bg-cream py-8 text-olive">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Countdown</p>
          <h2 className="font-montserrat text-2xl font-black md:text-3xl">
            Register before slots fill
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-olive/10 bg-olive/10 sm:grid-cols-4">
          {Object.entries(time).map(([label, value]) => (
            <div key={label} className="bg-cream p-3 text-center transition duration-300 hover:bg-olive hover:text-cream sm:p-4">
              <strong className="font-montserrat text-2xl font-black md:text-4xl">
                {value.toString().padStart(2, "0")}
              </strong>
              <span className="block text-[10px] font-bold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.12em]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
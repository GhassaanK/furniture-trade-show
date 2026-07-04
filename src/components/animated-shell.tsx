"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AnimatedShell() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 42 },
        {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          clearProps: "transform",
        },
      );

      gsap.fromTo(
        ".hero-image",
        { y: 36, scale: 1.05 },
        {
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      gsap.to(".hero-parallax", {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28 },
          {
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
        const cards = group.querySelectorAll(".stagger-card");
        gsap.fromTo(
          cards,
          { y: 28 },
          {
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.08,
            clearProps: "transform",
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".image-mask").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.85,
            ease: "power3.out",
            clearProps: "clipPath",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

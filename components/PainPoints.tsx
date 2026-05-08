"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  "Duis aute irure dolor in reprehenderit in voluptate velit.",
];

const PainPoints = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".pp-headline", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pp-item", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".pp-list",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(videoRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="pain"
      className="relative overflow-hidden bg-gradient-to-b from-[#f0f8fc] to-[#d8ecf5] py-24 text-[#012e43]"
    >
      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(1,46,67,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(1,46,67,0.06) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="pp-headline mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0e6f9f]">
            Lorem ipsum
          </p>
          <h2 className="pp-headline font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Lorem ipsum <span className="relative inline-block">
              <span className="relative z-10">dolor sit amet</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[#77e4ff]/70"
              />
            </span>{" "}
            …
          </h2>

          <ul className="pp-list mt-10 space-y-5">
            {painPoints.map((text, idx) => (
              <li
                key={idx}
                className="pp-item flex items-start gap-4 text-base text-[#012e43]/85 md:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#012e43] text-[#77e4ff]"
                >
                  <svg
                    viewBox="0 0 14 14"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M2 2 L12 12 M12 2 L2 12" />
                  </svg>
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              title="Lorem ipsum dolor"
              rightIcon={<TiArrowRight />}
              href="#what-is"
            />
          </div>
        </div>

        {/* video placeholder card */}
        <div ref={videoRef} className="relative">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#012e43] ring-2 ring-[#012e43]/20 shadow-[0_30px_60px_-20px_rgba(1,46,67,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#024260] to-[#012e43]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <div className="flex-center h-20 w-20 rounded-full bg-[#77e4ff] shadow-[0_10px_40px_rgba(119,228,255,0.5)]">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="#012e43">
                  <path d="M3 5l9 5-9 5V5z" opacity="0.95" />
                  <path
                    d="M16 7l5 5-5 5"
                    stroke="#012e43"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-display text-lg font-bold text-white">
                Lorem ipsum dolor
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                Sit amet consectetur
              </p>
            </div>

            {/* volume / play overlay corners */}
            <div className="absolute bottom-3 right-3 flex gap-2 text-xs text-white/60">
              <span className="rounded-md bg-white/10 px-2 py-1 backdrop-blur-sm">
                ▶
              </span>
              <span className="rounded-md bg-white/10 px-2 py-1 backdrop-blur-sm">
                🔊
              </span>
            </div>
          </div>

          {/* cyan accent shape */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-16 w-16 rounded-md bg-[#77e4ff]"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

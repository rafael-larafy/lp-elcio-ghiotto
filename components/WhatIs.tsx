"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const WhatIs = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".wi-eyebrow, .wi-title, .wi-arrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".wi-paragraph", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".wi-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".wi-cta", {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".wi-cta",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // arrow drawing animation
      gsap.fromTo(
        ".wi-arrow svg path",
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".wi-arrow",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="what-is"
      className="relative overflow-hidden bg-[#012e43] py-28 text-white md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />

      {/* cyan ambient */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(119,228,255,0.55) 0%, rgba(119,228,255,0) 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* arrow icon */}
          <div className="wi-arrow lg:col-span-3">
            <svg
              viewBox="0 0 200 200"
              width="160"
              height="160"
              aria-hidden="true"
              className="mx-auto md:mx-0"
            >
              <path
                d="M40 160 L160 40 M70 40 L160 40 L160 130"
                stroke="#77e4ff"
                strokeWidth="14"
                strokeLinecap="square"
                fill="none"
                strokeDasharray="200"
              />
            </svg>
          </div>

          {/* heading */}
          <div className="wi-content text-center lg:col-span-9">
            <p className="wi-eyebrow text-xs font-bold uppercase tracking-[0.32em] text-white/60">
              Lorem ipsum
            </p>
            <h2 className="wi-title mt-3 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="cyan-text">DOLOR?</span>
            </h2>

            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-center text-base leading-relaxed text-white/75 md:text-lg">
              <p className="wi-paragraph">
                Lorem ipsum{" "}
                <span className="font-bold text-white">dolor sit amet</span>,
                consectetur adipiscing elit, sed do eiusmod{" "}
                <span className="font-bold text-white">tempor incididunt</span>{" "}
                ut labore et{" "}
                <span className="font-bold text-white">dolore magna aliqua</span>{" "}
                ut <span className="font-bold text-[#77e4ff]">enim ad minim</span>{" "}
                veniam.
              </p>

              <p className="wi-paragraph">
                Quis nostrud{" "}
                <span className="font-bold text-white">exercitation</span>{" "}
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in{" "}
                <span className="font-bold text-white">reprehenderit</span> in
                voluptate velit esse!
              </p>
            </div>

            <div className="wi-cta mt-12 flex justify-center">
              <Button
                title="Lorem ipsum"
                rightIcon={<TiArrowRight />}
                href="#for-whom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;

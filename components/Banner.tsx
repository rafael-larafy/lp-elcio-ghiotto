"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".banner-text", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="cyan-strip relative isolate py-5">
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(1,46,67,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(1,46,67,0.22) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <p className="banner-text relative text-center font-display text-sm font-medium tracking-wide text-[#012e43] md:text-base">
        Lorem ipsum dolor sit amet.{" "}
        <span className="font-extrabold">
          Consectetur adipiscing elit, sed do eiusmod tempor!
        </span>
      </p>
    </div>
  );
};

export default Banner;

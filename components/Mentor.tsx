"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TiArrowRight } from "react-icons/ti";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2080, prefix: "+ de ", suffix: "", label: "lorem ipsum dolor" },
  { value: 1009, prefix: "+ de ", suffix: "", label: "sit amet consectetur" },
  { value: 50, prefix: "+ de ", suffix: "", label: "adipiscing elit" },
  { value: 10, prefix: "+ de ", suffix: "", label: "sed do eiusmod" },
];

const formatNumber = (n: number) =>
  n.toLocaleString("pt-BR", { useGrouping: true });

const StatCounter = ({
  prefix,
  value,
  suffix,
  label,
}: {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
}) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { n: 0 };
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          n: value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setDisplay(Math.floor(obj.n)),
          onComplete: () => setDisplay(value),
        });
      },
    });
    return () => trigger.kill();
  }, [value]);

  return (
    <div ref={ref} className="flex items-baseline gap-2 py-2">
      <span className="font-display text-2xl font-extrabold text-[#00091a] md:text-3xl">
        {prefix}
        {formatNumber(display)}
        {suffix}
      </span>
      <span className="text-sm font-medium text-[#00091a]/80 md:text-base">
        {label}
      </span>
    </div>
  );
};

const Mentor = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".mt-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".mt-image", {
        x: -60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mt-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".mt-bio p", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".mt-bio",
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
      id="mentor"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #04ADE5 0%, #04ADE5 100%)",
      }}
    >
      {/* texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 9, 26,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 9, 26,0.22) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="container-page relative">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* PORTRAIT + STATS */}
          <div className="lg:col-span-5">
            <div className="relative h-full">
              <div className="mt-image relative aspect-[3/4] w-full overflow-hidden rounded-[28px] bg-[#00091a]">
                <Image
                  src="https://placehold.co/600x800/012e43/77e4ff?text=Lorem+ipsum"
                  alt="Lorem ipsum"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 9, 26,0) 50%, rgba(0, 9, 26,0.55) 100%)",
                  }}
                />

                {/* dark corner accents */}
                <span
                  aria-hidden="true"
                  className="absolute -right-3 -top-3 h-10 w-10 bg-[#00091a]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 h-10 w-10 bg-[#00091a]"
                  style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
                />
              </div>

              {/* Stats card overlapping bottom */}
              <div className="mt-card relative -mt-16 mx-3 rounded-2xl bg-white p-6 shadow-[0_30px_80px_-20px_rgba(0, 9, 26,0.45)] md:p-8">
                {stats.map((s) => (
                  <StatCounter
                    key={s.label}
                    prefix={s.prefix}
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                  />
                ))}
                <div className="mt-6">
                  <Button
                    title="Lorem ipsum"
                    rightIcon={<TiArrowRight />}
                    href="#pricing"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BIO */}
          <div className="mt-bio lg:col-span-7">
            <div className="card-dark relative h-full overflow-hidden rounded-[28px] border-white/5 bg-[#00091a] p-8 md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-30" />

              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#04ADE5]">
                Lorem <span className="text-white/80">ipsum dolor sit amet</span>:
              </p>

              <h2 className="mt-3 font-display text-4xl font-extrabold text-white md:text-6xl">
                Lorem Ipsum <span className="cyan-text">Dolor</span>
              </h2>

              <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/75 md:text-base">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                  <span className="font-bold text-white">ut enim ad minim</span>{" "}
                  veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
                  <span className="font-bold text-white">aliquip ex ea</span>{" "}
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint{" "}
                  <span className="font-bold text-white">occaecat cupidatat</span>{" "}
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit{" "}
                  <span className="font-bold text-white">
                    voluptatem accusantium
                  </span>
                  , doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  ab illo inventore{" "}
                  <span className="font-bold text-white">veritatis et quasi</span>
                  . Architecto beatae vitae dicta sunt explicabo. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione.
                </p>
                <p>
                  At vero eos et{" "}
                  <span className="font-bold text-white">accusamus et iusto</span>{" "}
                  odio dignissimos ducimus qui blanditiis praesentium{" "}
                  <span className="font-bold text-white">voluptatum deleniti</span>.
                </p>
                <p>
                  <span className="font-bold text-[#04ADE5]">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</span>{" "}
                  adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;

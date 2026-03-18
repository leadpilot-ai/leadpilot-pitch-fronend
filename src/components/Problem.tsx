"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    icon: "📱",
    text: "100 inquiries a day. 90% are time-wasters.",
  },
  {
    icon: "⏳",
    text: "Your team manually replies all day.",
  },
  {
    icon: "💸",
    text: "Hot leads go cold while you handle cold ones.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".problem-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="section-shell bg-primary text-white">
      <div className="absolute right-0 top-0 h-[460px] w-[460px] translate-x-1/4 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] -translate-x-1/4 translate-y-1/4 rounded-full bg-white/10 blur-[90px]"></div>

      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4">The Real Estate Nightmare</h2>
          <p className="section-subtitle text-white/70">Manual lead qualification is killing your conversion rates and exhausting your team.</p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="problem-card opacity-0 translate-y-10 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-1 hover:border-accent/35 hover:shadow-2xl hover:shadow-black/20"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-3xl shadow-inner shadow-black/10">
                {item.icon}
              </div>
              <p className="text-xl font-medium leading-relaxed text-white/95">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

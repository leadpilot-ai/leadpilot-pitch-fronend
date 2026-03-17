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
    <section id="problem" className="py-24 bg-[#0F1E35] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Real Estate Nightmare</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Manual lead qualification is killing your conversion rates and exhausting your team.</p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="problem-card opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <p className="text-xl font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

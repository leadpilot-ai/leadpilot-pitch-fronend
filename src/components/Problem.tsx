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
  const sectionRef = useRef<HTMLElement>(null);

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
    <section 
      id="problem"
      ref={sectionRef}
      className="bg-[#0F1E35] text-white py-24 px-6 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Real Estate Bottleneck</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Scaling your sales team is impossible when they are buried in low-quality leads.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-accent/30 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <p className="text-xl font-medium leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

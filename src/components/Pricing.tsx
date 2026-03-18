"use client";

import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "4,999",
    description: "Perfect for small agencies starting out.",
    features: ["Auto replies", "Lead storage", "Standard support"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "12,999",
    description: "The complete AI qualification engine.",
    features: ["AI qualification", "Lead scoring", "Priority support", "Custom prompts"],
    highlight: true,
  },
  {
    name: "Business",
    price: "29,999",
    description: "Scale your real estate empire.",
    features: ["Full analytics", "Team access", "API access", "Account manager"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-shell bg-slate-50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 text-gray-900">Simple, Transparent Pricing</h2>
          <p className="section-subtitle text-gray-600">Choose the plan that fits your business needs.</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? "z-10 scale-[1.02] border-accent bg-white ring-4 ring-accent/10 shadow-xl"
                  : "border-slate-200/90 bg-white/85 shadow-sm hover:border-primary/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-accent/30 bg-accent px-4 py-1 text-sm font-bold text-primary shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-black text-gray-900">Rs. {plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#bookdemo"
                className={`w-full rounded-2xl py-4 text-center font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.highlight
                    ? "border border-accent/30 bg-accent text-primary hover:bg-accent/90"
                    : "border border-slate-200 bg-slate-100 text-gray-900 hover:bg-slate-200"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

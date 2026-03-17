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
    <section id=&apos;pricing&apos; className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your business needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl flex flex-col ${
                plan.highlight
                  ? "border-accent ring-4 ring-accent/10 shadow-lg scale-105 z-10"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-black text-gray-900">Rs. {plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
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
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-accent/90 shadow-[0_10px_20px_rgba(37,211,102,0.2)]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
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

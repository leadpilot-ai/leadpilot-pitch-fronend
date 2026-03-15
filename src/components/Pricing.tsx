import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Rs. 4,999",
      features: "Auto replies + lead storage",
      isPopular: false,
    },
    {
      name: "Growth",
      price: "Rs. 12,999",
      features: "AI qualification + scoring",
      isPopular: true,
    },
    {
      name: "Business",
      price: "Rs. 29,999",
      features: "Full analytics + team access",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F8A] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that fits your agency's scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${
                plan.isPopular ? "border-[#25D366] scale-105 shadow-xl" : "border-gray-100"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#25D366] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#1B4F8A]">{plan.price}</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </div>

              <div className="flex-1 mb-10">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {plan.features}
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited leads
                  </li>
                </ul>
              </div>

              <Link
                href="#bookdemo"
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                  plan.isPopular
                    ? "bg-[#1B4F8A] text-white hover:bg-[#153e6b] shadow-lg"
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

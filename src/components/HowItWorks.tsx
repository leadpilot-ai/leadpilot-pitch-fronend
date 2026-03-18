"use client";

const steps = [
  {
    title: "Customer sends WhatsApp inquiry",
    description: "Whether it's 2 AM or 2 PM, LeadPilot AI is always awake to greet them instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "AI scores and qualifies automatically",
    description: "Smart algorithms check budget, intent, and location to separate window shoppers from buyers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Your team gets only hot leads",
    description: "Receive notifications only for qualified leads ready to be closed, complete with AI summaries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-shell bg-slate-50">
      <div className="section-container">
        <div className="mb-20 text-center">
          <h2 className="section-title mb-4 text-gray-900">How It Works</h2>
          <p className="section-subtitle text-gray-600">Three simple steps to transform your WhatsApp lead management.</p>
        </div>

        <div className="relative">
          {/* Dotted Line (Desktop Only) */}
          <div className="absolute left-[15%] right-[15%] top-[60px] -z-10 hidden border-t-2 border-dashed border-gray-300/80 lg:block"></div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-3xl border border-slate-200/90 bg-white/85 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
              >
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -right-4 -top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-accent text-lg font-bold text-primary shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-4 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="max-w-xs leading-relaxed text-gray-600">{step.description}</p>
                
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="my-4 h-12 w-px border-l-2 border-dashed border-gray-300 lg:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

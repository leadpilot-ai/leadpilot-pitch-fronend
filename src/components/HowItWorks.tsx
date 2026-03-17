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
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Three simple steps to transform your WhatsApp lead management.</p>
        </div>

        <div className="relative">
          {/* Dotted Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] border-t-2 border-dotted border-gray-200 -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary transition-transform group-hover:scale-110 shadow-sm relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
                
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-px h-12 border-l-2 border-dotted border-gray-300 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

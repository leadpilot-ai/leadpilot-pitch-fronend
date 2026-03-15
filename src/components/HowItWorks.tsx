export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Receive",
      description: "Customer sends WhatsApp inquiry",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Qualify",
      description: "AI scores and qualifies automatically",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Close",
      description: "Your team gets only hot, ready-to-close leads",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F8A] mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The bridge between messy WhatsApp chats and a high-performance sales desk.</p>
        </div>

        <div className="relative">
          {/* Dotted Line Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dotted border-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center text-center group">
                {/* Step Number & Icon Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white border-2 border-[#1B4F8A] rounded-full flex items-center justify-center text-[#1B4F8A] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl shadow-md">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#1B4F8A] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
                
                {/* Dotted Line Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-12 border-l-2 border-dotted border-gray-200 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

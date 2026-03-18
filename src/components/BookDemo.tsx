"use client";

import { calendlyUrl, whatsappUrl } from "@/lib/publicConfig";

export default function BookDemo() {
  return (
    <section id="bookdemo" className="section-shell bg-primary text-white">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] -translate-x-1/4 translate-y-1/4 rounded-full bg-white/10 blur-[90px]"></div>
      
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/5 px-6 py-12 text-center shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl md:px-14 md:py-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">See LeadPilot AI qualify your leads — live.</h2>
          <p className="mb-12 text-xl text-white/75">20-minute demo. No commitment. See the future of real estate automation.</p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/40 bg-white px-10 py-4 text-xl font-bold text-primary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg sm:w-auto"
            >
              Book a Call
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-accent/40 bg-accent px-10 py-4 text-xl font-bold text-primary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg sm:w-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.569 2.112 2.141-.557c.908.52 1.964.887 3.177.887 3.036 0 5.766-2.613 5.766-5.767s-2.73-5.725-5.766-5.725zm3.61 8.211c-.139.393-.803.707-1.111.748-.309.041-.659.062-2.126-.531-1.741-.699-2.859-2.47-2.946-2.586-.086-.115-.701-.932-.701-1.774s.432-1.258.587-1.423c.155-.165.339-.206.453-.206s.227.001.326.005c.101.004.238-.038.373.284.139.33.475 1.155.516 1.237.041.082.068.178.012.289-.056.111-.082.178-.165.273s-.165.165-.25.263c-.114.131-.227.247-.118.432.11.185.485.801 1.042 1.297.712.637 1.343.834 1.545.922.185.082.289.056.402-.056.111-.111.475-.544.606-.723s.26-.155.432-.09c.174.066 1.1.516 1.288.618.188.101.314.155.36.236.046.082.046.474-.093.867zM12.001 2c-5.523 0-10 4.477-10 10 0 1.956.562 3.782 1.528 5.326l-1.528 5.674 5.823-1.526c1.512.915 3.279 1.452 5.177 1.452 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.154c-1.637 0-3.15-.461-4.428-1.259l-.317-.2-.338.088-1.693.444.453-1.684.1-.373-.243-.393c-.803-1.302-1.234-2.793-1.234-4.28 0-4.496 3.659-8.154 8.154-8.154 4.496 0 8.154 3.658 8.154 8.154-.001 4.496-3.66 8.154-8.154 8.154z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

export default function BookDemo() {
  return (
    <section id="bookdemo" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">See LeadPilot AI qualify your leads — live.</h2>
          <p className="text-xl text-white/70 mb-12">20-minute demo. No commitment. See the future of real estate automation.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="https://calendly.com/leadpilot/demo"
              target="_blank"
              className="bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Book a Call
            </Link>
            
            <Link
              href="https://wa.me/923000000000"
              target="_blank"
              className="bg-accent text-white hover:bg-accent/90 px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.569 2.112 2.141-.557c.908.52 1.964.887 3.177.887 3.036 0 5.766-2.613 5.766-5.767s-2.73-5.725-5.766-5.725zm3.61 8.211c-.139.393-.803.707-1.111.748-.309.041-.659.062-2.126-.531-1.741-.699-2.859-2.47-2.946-2.586-.086-.115-.701-.932-.701-1.774s.432-1.258.587-1.423c.155-.165.339-.206.453-.206s.227.001.326.005c.101.004.238-.038.373.284.139.33.475 1.155.516 1.237.041.082.068.178.012.289-.056.111-.082.178-.165.273s-.165.165-.25.263c-.114.131-.227.247-.118.432.11.185.485.801 1.042 1.297.712.637 1.343.834 1.545.922.185.082.289.056.402-.056.111-.111.475-.544.606-.723s.26-.155.432-.09c.174.066 1.1.516 1.288.618.188.101.314.155.36.236.046.082.046.474-.093.867zM12.001 2c-5.523 0-10 4.477-10 10 0 1.956.562 3.782 1.528 5.326l-1.528 5.674 5.823-1.526c1.512.915 3.279 1.452 5.177 1.452 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.154c-1.637 0-3.15-.461-4.428-1.259l-.317-.2-.338.088-1.693.444.453-1.684.1-.373-.243-.393c-.803-1.302-1.234-2.793-1.234-4.28 0-4.496 3.659-8.154 8.154-8.154 4.496 0 8.154 3.658 8.154 8.154-.001 4.496-3.66 8.154-8.154 8.154z" />
              </svg>
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

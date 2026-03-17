"use client";

import { whatsappUrl } from "@/lib/publicConfig";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0A1628] text-white/60 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">LeadPilot AI</h3>
            <p className="text-sm">© 2026 LeadPilot AI. Built for Pakistani SMEs.</p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.569 2.112 2.141-.557c.908.52 1.964.887 3.177.887 3.036 0 5.766-2.613 5.766-5.767s-2.73-5.725-5.766-5.725zm3.61 8.211c-.139.393-.803.707-1.111.748-.309.041-.659.062-2.126-.531-1.741-.699-2.859-2.47-2.946-2.586-.086-.115-.701-.932-.701-1.774s.432-1.258.587-1.423c.155-.165.339-.206.453-.206s.227.001.326.005c.101.004.238-.038.373.284.139.33.475 1.155.516 1.237.041.082.068.178.012.289-.056.111-.082.178-.165.273s-.165.165-.25.263c-.114.131-.227.247-.118.432.11.185.485.801 1.042 1.297.712.637 1.343.834 1.545.922.185.082.289.056.402-.056.111-.111.475-.544.606-.723s.26-.155.432-.09c.174.066 1.1.516 1.288.618.188.101.314.155.36.236.046.082.046.474-.093.867zM12.001 2c-5.523 0-10 4.477-10 10 0 1.956.562 3.782 1.528 5.326l-1.528 5.674 5.823-1.526c1.512.915 3.279 1.452 5.177 1.452 5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.154c-1.637 0-3.15-.461-4.428-1.259l-.317-.2-.338.088-1.693.444.453-1.684.1-.373-.243-.393c-.803-1.302-1.234-2.793-1.234-4.28 0-4.496 3.659-8.154 8.154-8.154 4.496 0 8.154 3.658 8.154 8.154-.001 4.496-3.66 8.154-8.154 8.154z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/leadpilot-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

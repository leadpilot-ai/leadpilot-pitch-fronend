export default function BookDemo() {
  return (
    <section id="bookdemo" className="py-24 bg-[#1B4F8A] text-white px-6 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          See LeadPilot AI qualify your leads — live.
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
          Get a personalized walkthrough of how we can automate your real estate sales funnel. 
          <span className="block mt-2 font-semibold text-accent">20-minute demo. No commitment.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://calendly.com/leadpilot/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-[#1B4F8A] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
          >
            Book a Call
          </a>
          
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#1ebe57] transition-all shadow-xl flex items-center justify-center gap-3 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.893 3.135 1.364 4.795 1.366 5.203.001 9.44-4.236 9.443-9.44.002-2.522-.981-4.893-2.767-6.68-1.789-1.786-4.162-2.769-6.685-2.771-5.204 0-9.441 4.237-9.443 9.44-.001 1.674.444 3.308 1.288 4.745L2.09 21.25l6.566-1.085zM16.3 14.316c-.327-.164-1.93-0.953-2.229-1.063-.3-.11-.518-.164-.736.164-.218.327-.845 1.063-1.036 1.281-.19.218-.381.245-.709.081-.327-.164-1.38-.508-2.53-1.536-.895-.8-1.498-1.786-1.675-2.085-.177-.3-.019-.462.144-.624.146-.147.327-.381.491-.572.164-.19.218-.327.327-.545.109-.218.055-.409-.027-.572-.082-.164-.736-1.772-1.008-2.427-.265-.638-.535-.551-.736-.561l-.627-.012c-.218 0-.572.081-.872.409-.3.327-1.145 1.118-1.145 2.727s1.172 3.163 1.336 3.381c.164.218 2.306 3.52 5.586 4.933.78.337 1.39.539 1.86.688.783.248 1.497.213 2.06.13.627-.094 1.93-.79 2.201-1.554.272-.764.272-1.418.19-1.554-.081-.137-.3-.218-.627-.382z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-12 opacity-50 text-xs tracking-widest uppercase font-bold">
          <span>Secure</span>
          <span>Scalable</span>
          <span>urdu support</span>
        </div>
      </div>
    </section>
  );
}

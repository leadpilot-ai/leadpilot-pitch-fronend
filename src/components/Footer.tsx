export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-12 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright/Text */}
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © 2026 LeadPilot AI. Built for Pakistani SMEs.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/923000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.893 3.135 1.364 4.795 1.366 5.203.001 9.44-4.236 9.443-9.44.002-2.522-.981-4.893-2.767-6.68-1.789-1.786-4.162-2.769-6.685-2.771-5.204 0-9.441 4.237-9.443 9.44-.001 1.674.444 3.308 1.288 4.745L2.09 21.25l6.566-1.085zM16.3 14.316c-.327-.164-1.93-0.953-2.229-1.063-.3-.11-.518-.164-.736.164-.218.327-.845 1.063-1.036 1.281-.19.218-.381.245-.709.081-.327-.164-1.38-.508-2.53-1.536-.895-.8-1.498-1.786-1.675-2.085-.177-.3-.019-.462.144-.624.146-.147.327-.381.491-.572.164-.19.218-.327.327-.545.109-.218.055-.409-.027-.572-.082-.164-.736-1.772-1.008-2.427-.265-.638-.535-.551-.736-.561l-.627-.012c-.218 0-.572.081-.872.409-.3.327-1.145 1.118-1.145 2.727s1.172 3.163 1.336 3.381c.164.218 2.306 3.52 5.586 4.933.78.337 1.39.539 1.86.688.783.248 1.497.213 2.06.13.627-.094 1.93-.79 2.201-1.554.272-.764.272-1.418.19-1.554-.081-.137-.3-.218-.627-.382z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/leadpilot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

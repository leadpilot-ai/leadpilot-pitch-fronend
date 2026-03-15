import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content Area */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 mt-12 md:mt-0">
              <span className="block mb-4 text-3xl md:text-4xl text-accent/90 bg-white/10 w-fit mx-auto lg:mx-0 px-4 py-2 rounded-lg backdrop-blur-sm">
                Real Estate in Pakistan?
              </span>
              Roz kitne WhatsApp inquiries <span className="text-accent underline decoration-4 decoration-accent/30 underline-offset-8">waste</span> ho jaate hain?
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              LeadPilot AI qualifies every WhatsApp lead automatically. Your team only talks to <strong className="text-white font-semibold">serious buyers</strong>. Wait less. Close more.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link
                href="#demo"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.4)] w-full sm:w-auto text-center"
              >
                Book a Free Demo
              </Link>
              <Link
                href="#demo"
                className="text-white hover:text-accent flex items-center gap-2 font-medium transition-colors"
              >
                See Live Demo 
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
            
            {/* Social Proof Stats */}
            <div className="mt-12 pt-8 border-t border-white/20 flex items-center justify-center lg:justify-start gap-8 opacity-80">
              <div>
                <p className="text-white font-bold text-2xl">24/7</p>
                <p className="text-white/60 text-sm w-max">Instant Replies</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <p className="text-white font-bold text-2xl">85%</p>
                <p className="text-white/60 text-sm w-max">Less Junk Leads</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div>
                <p className="text-white font-bold text-2xl">Urdu/English</p>
                <p className="text-white/60 text-sm w-max">Smart Detection</p>
              </div>
            </div>
          </div>

          {/* Right Area: CSS Animated Phone Mockup */}
          <div className="flex-1 w-full max-w-sm ml-auto mr-auto relative">
            <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] shadow-2xl p-2 mx-auto ring-8 ring-white/20 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 overflow-hidden">
              {/* Phone Notch/Header */}
              <div className="bg-[#075E54] w-full h-[80px] rounded-t-[32px] rounded-b-none px-6 pt-10 pb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">LP</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] leading-tight">LeadPilot Assistant</h3>
                  <p className="text-white/70 text-xs">online</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="bg-[#ECE5DD] w-full h-[504px] rounded-b-[32px] p-4 flex flex-col gap-4 overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* Message 1: User */}
                <div className="bg-white p-3 rounded-lg rounded-tl-none self-start max-w-[85%] shadow-sm relative z-10 animate-[slideIn_1s_ease-out_forwards]">
                  <p className="text-gray-800 text-sm">Hello, I need info about 5 marla plots.</p>
                  <p className="text-[10px] text-gray-400 text-right mt-1">10:42 AM</p>
                </div>

                {/* Message 2: Bot */}
                <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none self-end max-w-[85%] shadow-sm relative z-10 opacity-0 animate-[fadeSlideIn_0.5s_ease-out_1.5s_forwards]">
                  <p className="text-gray-800 text-sm">Great question! What's your budget range?</p>
                  <p className="text-[10px] text-gray-500 text-right mt-1 flex justify-end items-center gap-1">
                    10:42 AM 
                    <svg className="w-3 h-3 text-[#53bdeb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </p>
                </div>
                
                 {/* Internal HUD Overlay for Demo Effect */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white p-3 rounded-xl border border-accent/50 shadow-2xl backdrop-blur-md opacity-0 animate-[scaleIn_0.5s_ease-out_2s_forwards] w-3/4 z-20">
                    <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/20">
                      <span className="text-[10px] font-mono text-accent">LEAD_SCORE</span>
                      <span className="text-sm font-bold text-accent">85</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-white/70">INTENT</span>
                      <span className="text-xs font-bold bg-[#ff3b30] px-2 py-0.5 rounded text-white shadow-sm flex items-center gap-1">
                         🔥 HOT
                      </span>
                    </div>
                 </div>

              </div>
            </div>
            
            {/* Decorative dots behind phone */}
            <div className="absolute top-10 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute bottom-20 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl pointer-events-none"></div>
          </div>

        </div>
      </div>
      
      {/* CSS Animations directly in component for ease */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          60% { transform: translate(-50%, -50%) scale(1.05); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}} />
    </section>
  );
}

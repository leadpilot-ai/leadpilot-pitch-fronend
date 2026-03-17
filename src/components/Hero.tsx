import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-primary pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background decoration - subtle gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content Area */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.2] mb-8 mt-12 md:mt-0">
              Roz kitne WhatsApp inquiries <span className="text-accent relative inline-block">
                waste
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                </svg>
              </span> ho jaate hain?
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
              LeadPilot AI qualifies every WhatsApp lead automatically. Your team only talks to <span className="text-white font-semibold">serious buyers</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <Link
                href="#book-demo"
                className="bg-accent hover:bg-accent/90 text-primary px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-[0_10px_30px_rgba(37,211,102,0.3)] w-full sm:w-auto text-center"
              >
                Book a Free Demo
              </Link>
              <Link
                href="#demo"
                className="text-white hover:text-accent flex items-center gap-3 font-semibold text-lg transition-colors group"
              >
                See Live Demo ↓
              </Link>
            </div>
          </div>

          {/* Right Area: CSS Animated Phone Mockup */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[640px]">
              {/* Device Frame */}
              <div className="absolute inset-0 bg-[#1e293b] rounded-[3rem] p-3 shadow-2xl ring-4 ring-white/10">
                {/* Screen */}
                <div className="w-full h-full bg-[#f1f5f9] rounded-[2.2rem] overflow-hidden flex flex-col relative">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075e54] pt-8 pb-4 px-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">LP</div>
                    <div>
                      <div className="text-white font-semibold text-sm">LeadPilot Assistant</div>
                      <div className="text-white/70 text-[10px]">Online</div>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-[#e5ddd5]" style={{ backgroundImage: &apos;url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")&apos; }}>
                    {/* User Msg */}
                    <div className="bg-white p-3 rounded-lg rounded-tl-none self-start max-w-[80%] shadow-sm text-sm animate-[slideIn_0.5s_ease-out_forwards]">
                      Aslam o Alaikum! Mujhe property details chahiye
                    </div>
                    {/* Bot Msg */}
                    <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none self-end max-w-[80%] shadow-sm text-sm opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]">
                      Walikum Assalam! Sure, what is your budget range?
                    </div>
                    {/* Analysis HUD */}
                    <div className="mt-auto bg-black/80 backdrop-blur-md border border-accent/30 rounded-xl p-3 text-white opacity-0 animate-[scaleIn_0.5s_ease-out_2s_forwards]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-white/50">Lead Score</span>
                        <span className="text-accent font-bold">92</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[92%]"></div>
                      </div>
                      <div className="mt-2 text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded w-fit">HOT LEAD 🔥</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </section>
  );
}

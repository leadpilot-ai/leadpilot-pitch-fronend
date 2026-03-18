import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-primary pb-20 pt-34 md:pt-36">
      {/* Background decoration - subtle gradients */}
      <div className="absolute right-0 top-0 h-[640px] w-[640px] translate-x-1/4 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/4 rounded-full bg-white/10 blur-[100px]"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          
          {/* Left Content Area */}
          <div className="max-w-2xl flex-1 space-y-7 text-center lg:text-left">
            <h1 className="mt-12 text-4xl font-bold leading-[1.12] tracking-tight text-white md:mt-0 md:text-6xl lg:text-7xl">
              Roz kitne WhatsApp inquiries <span className="text-accent relative inline-block">
                waste
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                </svg>
              </span> ho jaate hain?
            </h1>
            
            <p className="text-lg font-light leading-relaxed text-white/80 md:text-xl">
              LeadPilot AI qualifies every WhatsApp lead automatically. Your team only talks to <span className="text-white font-semibold">serious buyers</span>.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 lg:justify-start">
              <Link
                href="#bookdemo"
                className="w-full rounded-full border border-accent/40 bg-accent px-10 py-4 text-center text-lg font-bold text-primary shadow-[0_10px_24px_rgba(37,211,102,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-[0_14px_30px_rgba(37,211,102,0.35)] md:text-xl sm:w-auto"
              >
                Book a Free Demo
              </Link>
              <Link
                href="#demo"
                className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-lg font-semibold text-white/95 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                See Live Demo ↓
              </Link>
            </div>
          </div>

          {/* Right Area: CSS Animated Phone Mockup */}
          <div className="flex w-full flex-1 justify-center lg:justify-end">
            <div className="relative h-[580px] w-[280px] sm:h-[640px] sm:w-[320px] lg:mr-2">
              {/* Device Frame */}
              <div className="absolute inset-0 rounded-[3rem] bg-slate-900 p-3 shadow-2xl ring-1 ring-white/25">
                {/* Screen */}
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.2rem] bg-slate-100">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075e54] pt-8 pb-4 px-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">LP</div>
                    <div>
                      <div className="text-white font-semibold text-sm">LeadPilot Assistant</div>
                      <div className="text-white/70 text-[10px]">Online</div>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-[#e5ddd5]" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}>
                    {/* User Msg */}
                    <div className="bg-white p-3 rounded-lg rounded-tl-none self-start max-w-[80%] shadow text-sm animate-[slideIn_0.5s_ease-out_forwards]">
                      Aslam o Alaikum! Mujhe property details chahiye
                    </div>
                    {/* Bot Msg */}
                    <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none self-end max-w-[80%] shadow text-sm opacity-0 animate-[slideIn_0.5s_ease-out_1s_forwards]">
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
              <div className="absolute -bottom-12 -right-12 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl"></div>
              <div className="absolute -left-12 -top-12 -z-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
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

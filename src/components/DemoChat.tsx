"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  content: string;
  score?: number;
  status?: "HOT" | "WARM" | "COLD";
  timestamp: string;
};

export default function DemoChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "Hi, I need a house in DHA Lahore",
      timestamp: "10:40 AM",
    },
    {
      role: "ai",
      content: "Welcome! I'm here to help. What's your budget range?",
      timestamp: "10:41 AM",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "5 marla price?",
    "3 bed in Bahria?",
    "Investment property",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = {
      role: "user",
      content: text,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/demo/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) throw new Error("API Offline");

      const data = await response.json();
      
      const aiMsg: Message = {
        role: "ai",
        content: data.response,
        score: data.lead_score,
        status: data.status,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Simulate a bit of delay for realism
      setTimeout(() => {
        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
      }, 800);

    } catch (error) {
      console.error(error);
      setIsTyping(false);
      const errorMsg: Message = {
        role: "ai",
        content: "Sorry, I'm having trouble connecting to the server. Is the backend running?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "HOT": return "bg-red-500 text-white";
      case "WARM": return "bg-orange-500 text-white";
      case "COLD": return "bg-blue-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <section id="demo" className="py-24 bg-gray-100 flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-4xl flex flex-col items-center">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F8A] mb-4">Try It Yourself</h2>
          <p className="text-gray-600">Simulate a real conversation and see LeadPilot's scoring in action.</p>
        </div>

        {/* WhatsApp Container */}
        <div className="w-full max-w-[500px] h-[650px] bg-[#E5DDD5] rounded-xl shadow-2xl flex flex-col border border-gray-300 relative overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#075E54] p-4 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
              <span className="text-white font-bold">LP</span>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full"></div>
            </div>
            <div>
              <h3 className="text-white font-semibold leading-tight">LeadPilot AI</h3>
              <p className="text-white/70 text-xs">online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth custom-scrollbar"
            style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundBlendMode: 'overlay' }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                {/* Bubble */}
                <div 
                  className={`max-w-[85%] p-3 rounded-lg shadow-sm relative ${
                    msg.role === 'user' 
                      ? 'bg-[#DCF8C6] rounded-tr-none' 
                      : 'bg-white rounded-tl-none'
                  }`}
                >
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">{msg.content}</p>
                  <p className="text-[10px] text-gray-500 text-right mt-1">{msg.timestamp}</p>
                  
                  {/* Bubble Tail */}
                  <div className={`absolute top-0 w-2 h-2 ${
                    msg.role === 'user' 
                      ? 'right-[-8px] bg-[#DCF8C6]' 
                      : 'left-[-8px] bg-white'
                  }`}
                  style={{ clipPath: msg.role === 'user' ? 'polygon(0 0, 0 100%, 100% 0)' : 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                </div>

                {/* Score Card (AI specific) */}
                {msg.role === 'ai' && msg.score !== undefined && (
                  <div className="mt-2 w-full max-w-[200px] bg-white rounded-lg p-2 shadow-md border-l-4 border-accent animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Lead Score</span>
                      <span className="font-mono font-bold text-[#1B4F8A]">{msg.score}/100</span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-2">
                       <div className="h-full bg-accent" style={{ width: `${msg.score}%` }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">STATUS</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getStatusColor(msg.status)}`}>
                        {msg.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
                <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="bg-white/50 backdrop-blur-sm p-3 border-t border-gray-200 flex flex-wrap gap-2 overflow-x-auto">
            {quickReplies.map((reply, i) => (
              <button 
                key={i} 
                onClick={() => setInput(reply)}
                className="bg-white border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-700 hover:border-accent hover:text-accent transition-all whitespace-nowrap"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="bg-[#F0F2F5] p-3 flex items-center gap-3 shrink-0">
            <input 
              type="text" 
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              className="flex-1 bg-white rounded-lg px-4 py-2 border-none focus:outline-none text-sm shadow-sm"
            />
            <button 
              onClick={() => handleSend(input)}
              disabled={!input.trim()}
              className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors disabled:opacity-50 shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

        </div>

        <p className="mt-8 text-sm text-gray-500 italic">
            * Backend server must be running at {process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}
        </p>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #bababa;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}

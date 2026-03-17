"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  score?: number;
  status?: string;
}

const starterMessages: Message[] = [
  {
    id: "1",
    sender: "user",
    text: "Hi, I need a house in DHA Lahore",
    timestamp: "10:00 AM",
  },
  {
    id: "2",
    sender: "ai",
    text: "Welcome! I&apos;m here to help. What&apos;s your budget range?",
    timestamp: "10:01 AM",
  },
];

const quickReplies = ["5 marla price?", "3 bed in Bahria?", "Investment property"];

export default function DemoChat() {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
        timestamp: new Date().toLocaleTimeString([], { hour: &apos;2-digit&apos;, minute: &apos;2-digit&apos; }),
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:8000/demo/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: data.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        score: data.lead_score,
        status: data.status,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg: Message = {
        id: Date.now().toString(),
        sender: "ai",
        text: "Sorry, I&apos;m having trouble connecting to the server. Please make sure the backend is running.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Interactive Demo</h2>
          <p className="text-gray-600">See how LeadPilot AI qualifies your leads in real-time.</p>
        </div>

        {/* WhatsApp Window */}
        <div className="bg-[#E5DDD5] rounded-xl shadow-2xl overflow-hidden flex flex-col h-[700px] border border-gray-200">
          {/* Header */}
          <div className="bg-[#075E54] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">LP</div>
              <div>
                <h3 className="font-semibold leading-tight">LeadPilot AI</h3>
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <div className="flex gap-4 opacity-70">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </div>
          </div>

          {/* Chat Body */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 bg-repeat"
            style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px' }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div 
                  className={`max-w-[85%] md:max-w-[70%] p-3 rounded-xl shadow-sm relative ${
                    msg.sender === "user" 
                      ? "bg-[#DCF8C6] rounded-tr-none text-gray-800" 
                      : "bg-white rounded-tl-none text-gray-800"
                  }`}
                >
                  <p className="text-[15px] leading-relaxed mb-1">{msg.text}</p>
                  <p className="text-[10px] text-gray-500 text-right">{msg.timestamp}</p>
                </div>

                {/* Score Card for AI */}
                {msg.sender === "ai" && msg.score !== undefined && (
                  <div className="mt-2 ml-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-md w-48 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Lead Score</span>
                      <span className="text-lg font-black text-primary">{msg.score}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-accent transition-all duration-1000" 
                        style={{ width: `${msg.score}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-start">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white shadow-sm ${
                        msg.status === "HOT" ? "bg-red-500" : msg.status === "WARM" ? "bg-orange-400" : "bg-blue-400"
                      }`}>
                        {msg.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="bg-[#F0F2F5] p-3 border-t border-gray-200">
            {/* Quick Replies */}
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  className="bg-white hover:bg-white/80 border border-gray-300 text-gray-600 text-xs px-3 py-1.5 rounded-full transition-colors shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-white border-none rounded-lg px-4 py-2.5 text-sm focus:ring-0 placeholder:text-gray-400 shadow-sm"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
                />
              </div>
              <button 
                onClick={() => handleSend(inputValue)}
                className={`p-2.5 rounded-full transition-colors ${
                  inputValue.trim() ? "bg-accent text-white shadow-md" : "text-gray-500"
                }`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

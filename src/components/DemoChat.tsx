"use client";

import { useState, useEffect, useRef } from "react";
import { apiBaseUrl } from "@/lib/publicConfig";

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
    text: "Welcome! I'm here to help. What's your budget range?",
    timestamp: "10:01 AM",
  },
];

const quickReplies = ["5 marla price?", "3 bed in Bahria?", "Investment property"];

const createMessageId = () =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

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
    const message = text.trim();
    if (!message || isTyping) return;

    const userMsg: Message = {
      id: createMessageId(),
      sender: "user",
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch(`${apiBaseUrl}/demo/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data: {
        response?: string;
        lead_score?: number;
        status?: string;
      } = await response.json();

      const leadScore =
        typeof data.lead_score === "number"
          ? Math.max(0, Math.min(100, data.lead_score))
          : undefined;

      const aiMsg: Message = {
        id: createMessageId(),
        sender: "ai",
        text:
          typeof data.response === "string" && data.response.trim()
            ? data.response
            : "Thanks for your message. Our team will follow up shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        score: leadScore,
        status: typeof data.status === "string" ? data.status : "NEW",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg: Message = {
        id: createMessageId(),
        sender: "ai",
        text: "Sorry, I'm having trouble connecting to the server. Please make sure the backend is running.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="demo" className="section-shell bg-slate-50">
      <div className="absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] -translate-x-1/4 translate-y-1/4 rounded-full bg-accent/10 blur-[90px]"></div>

      <div className="section-container relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="section-title mb-4 text-primary">Interactive Demo</h2>
          <p className="section-subtitle text-gray-600">See how LeadPilot AI qualifies your leads in real-time.</p>
        </div>

        {/* WhatsApp Window */}
        <div className="flex h-[700px] flex-col overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#075E54] p-4 text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.16)] md:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/20 font-bold">LP</div>
              <div>
                <h3 className="font-semibold leading-tight">LeadPilot AI</h3>
                <div className="flex items-center gap-1.5 text-xs text-white/80">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <div className="flex gap-2 opacity-80">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </div>
          </div>

          {/* Chat Body */}
          <div 
            ref={scrollRef}
            className="flex-1 space-y-6 overflow-y-auto bg-repeat p-4 md:p-8"
            style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px' }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div 
                  className={`relative max-w-[85%] rounded-2xl p-3 shadow-sm transition-shadow duration-200 md:max-w-[70%] ${
                    msg.sender === "user" 
                      ? "rounded-tr-md border border-black/5 bg-[#DCF8C6] text-slate-800" 
                      : "rounded-tl-md border border-slate-200 bg-white text-slate-800"
                  }`}
                >
                  <p className="mb-1 text-[15px] leading-relaxed">{msg.text}</p>
                  <p className="mt-1 text-right text-[10px] text-gray-500">{msg.timestamp}</p>
                </div>

                {/* Score Card for AI */}
                {msg.sender === "ai" && msg.score !== undefined && (
                  <div className="animate-in slide-in-from-top-2 fade-in mt-2 ml-1 w-48 rounded-xl border border-slate-200/90 bg-white/90 p-3 shadow-md backdrop-blur-sm">
                    <div className="mb-1 flex items-baseline justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Lead Score</span>
                      <span className="text-lg font-black text-primary">{msg.score}</span>
                    </div>
                    <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
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
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-slate-200 bg-white p-3 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200 bg-slate-100/95 p-4">
            {/* Quick Replies */}
            <div className="mb-3 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  disabled={isTyping}
                  className="rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {reply}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-full p-1 text-gray-500 transition-colors hover:bg-white hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm outline-none ring-0 transition-all duration-200 focus:border-primary/30 focus:ring-2 focus:ring-primary/10 placeholder:text-gray-400"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(inputValue)}
                />
              </div>
              <button 
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className={`rounded-full p-2.5 transition-all duration-200 ${
                  inputValue.trim() && !isTyping
                    ? "bg-accent text-primary shadow-md hover:-translate-y-0.5 hover:shadow-lg"
                    : "cursor-not-allowed bg-slate-200 text-slate-500"
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

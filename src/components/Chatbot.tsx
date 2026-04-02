"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isToolUIPart } from "ai";
import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[80vh] flex flex-col bg-surface-container-lowest shadow-2xl rounded-2xl overflow-hidden z-[100] border border-outline-variant">
      <div className="bg-primary text-on-primary p-4 flex justify-between items-center">
        <h2 className="font-headline font-bold text-xl">Trợ lý AI</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-surface">
        {messages.length === 0 ? (
          <div className="text-center text-on-surface-variant font-body my-auto opacity-70">
            Xin chào! Tôi có thể giúp gì cho doanh nghiệp của bạn?
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`p-3 rounded-2xl max-w-[85%] font-body text-sm flex flex-col gap-2 ${
                m.role === "user"
                  ? "bg-primary-container text-on-primary-container self-end rounded-tr-sm"
                  : "bg-surface-container-high text-on-surface self-start rounded-tl-sm"
              }`}
            >
              {m.parts.map((part, i) => {
                if (part.type === "text") {
                  return <span key={i}>{part.text}</span>;
                }
                if (isToolUIPart(part)) {
                  return (
                    <div key={i} className="opacity-50 italic">
                      [Calling tool: {(part as any).toolName || 'unknown'}]
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-surface-container border-t border-outline-variant flex gap-2">
        <input
          className="flex-1 bg-surface-container-lowest border border-outline px-4 py-2 rounded-full font-body text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          value={input}
          placeholder="Nhập câu hỏi tại đây..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary text-on-primary p-2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/90 transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>send</span>
        </button>
      </form>
    </div>
  );
}

'use client';

import { Send, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

type ChatMessage = {
  id: string;
  role: 'user' | 'bot' | 'loading' | 'error';
  content: string;
};

const InlineChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasConversation = useMemo(() => messages.some(m => m.role !== 'loading'), [messages]);

  useEffect(() => {
    if (isExpanded && inputRef.current) inputRef.current.focus();
  }, [isExpanded]);

  useEffect(() => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [messages, isExpanded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isSending) return;

    // Expand on first message
    if (!isExpanded) setIsExpanded(true);

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
    };
    setMessages(prev => [...prev, userMsg, { id: `l-${Date.now()}`, role: 'loading', content: '...' }]);
    setInput('');
    setIsSending(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, language: 'fr' }),
      });
      const data = await res.json();
      const botText = data.response || data.message || "Désolé, je n'ai pas pu répondre.";
      setMessages(prev => prev.filter(m => m.role !== 'loading').concat({ id: `b-${Date.now()}`, role: 'bot', content: botText }));
    } catch {
      setMessages(prev => prev.filter(m => m.role !== 'loading').concat({ id: `e-${Date.now()}`, role: 'error', content: "Oups, réessayez !" }));
    } finally {
      setIsSending(false);
    }
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleClear = () => {
    setMessages([]);
    setIsExpanded(false);
  };

  return (
    <section
      aria-label="Assistant conversationnel Kokotajlo"
      className="chat-section max-w-4xl mx-auto w-full"
    >
      <div
        ref={containerRef}
        className="bg-background/90 backdrop-blur-sm border border-border rounded-xl shadow-sm transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: isExpanded ? '60vh' : '56px',
        }}
      >
        {/* Header Row (shown when expanded and with conversation) */}
        {isExpanded && hasConversation && (
          <div className="flex items-center justify-between px-4 pt-3 text-xs text-foreground/60">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Assistant IA (FR/EN)</span>
              <button
                type="button"
                onClick={handleClear}
                className="underline hover:text-foreground"
              >
                Effacer
              </button>
            </div>
            <button
              type="button"
              aria-label="Réduire le chat"
              onClick={handleCollapse}
              className="p-1 rounded hover:bg-foreground/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Messages area */}
        {isExpanded && (
          <div ref={scrollerRef} className="px-4 pb-3 pt-2 space-y-3 overflow-y-auto" style={{ maxHeight: '50vh' }}>
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_180ms_ease-out]`}>
                <div
                  className={`rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    m.role === 'user'
                      ? 'bg-primary text-primary-content'
                      : m.role === 'bot'
                      ? 'bg-foreground/5 text-foreground'
                      : m.role === 'loading'
                      ? 'bg-foreground/10 text-foreground/70'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {m.role === 'loading' ? (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  ) : (
                    <span>{m.content}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Input row - always visible */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-2 border-t border-border">
          <input
            ref={inputRef}
            type="text"
            name="message"
            aria-label="Écrire un message"
            placeholder="Posez une question sur nos agents IA conformes (FR/EN)"
            className="flex-1 px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            aria-label="Envoyer"
            disabled={!input.trim() || isSending}
            className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-accent text-accent-content disabled:bg-foreground/30 disabled:text-foreground/70 disabled:cursor-not-allowed hover:bg-accent-600 transition-colors btn"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default InlineChat;



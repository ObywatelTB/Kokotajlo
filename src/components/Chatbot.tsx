'use client';

import { Bot, Minimize2, Send, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

type Position = 'top-right' | 'bottom-right';
interface ChatbotProps {
  position?: Position;
  defaultOpen?: boolean;
}

const Chatbot = ({ position = 'bottom-right', defaultOpen = false }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // Derive page context from pathname
  const context = useMemo(() => {
    if (pathname.includes('/resources')) return 'resources';
    if (pathname.includes('/contact')) return 'contact';
    if (pathname.includes('/services')) return 'services';
    if (pathname.includes('/about')) return 'about';
    return 'general';
  }, [pathname]);

  const positionClass = position === 'top-right' ? 'top-4 right-4' : 'bottom-4 right-4';

  // Initial message when widget opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: 'initial',
        content: 'Bonjour! Demandez-moi sur nos agents IA conformes.',
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);

      // Track chatbot opened and conversation started
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('Engagement', 'Chatbot Opened', 'Widget Click', undefined, {
          event_params: {
            position: position,
            default_open: defaultOpen
          }
        });
        window.trackEvent('Lead', 'Chat Conversation Start', 'Product Inquiry', undefined, {
          event_params: {
            source: 'chatbot_widget',
            language: 'fr'
          }
        });
      }
    }
  }, [isOpen, messages.length, position, defaultOpen]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputMessage.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Track message sent
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('Engagement', 'Chatbot Message Sent', 'User Message', undefined, {
        event_params: {
          message_length: inputMessage.trim().length,
          conversation_length: messages.length + 1
        }
      });
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          language: 'fr',
          context: { page: context },
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur de communication');
      }

      const data = await response.json();

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: data.response || 'Désolé, je n\'ai pas pu traiter votre demande.',
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);

      // Track bot response
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('Engagement', 'Chatbot Response Received', 'Bot Message', undefined, {
          event_params: {
            response_length: botMessage.content.length,
            conversation_length: messages.length + 2, // +2 for user and bot messages
            has_error: !data.response
          }
        });
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className={`fixed ${positionClass} z-50`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent hover:bg-accent-600 text-accent-content p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
          aria-label="Ouvrir le chatbot"
        >
          <Bot className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed ${positionClass} z-50`}>
      <div className={`bg-background shadow-2xl rounded-lg border border-border transition-all duration-200 ${
        isMinimized ? 'w-80 h-14' : 'w-80 h-96'
      }`}>
        {/* Header */}
        <div className="bg-primary text-primary-content p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">Assistant IA Kokotajlo</span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="hover:bg-primary-600 p-1 rounded transition-colors"
              aria-label={isMinimized ? "Agrandir" : "Réduire"}
            >
              <Minimize2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                // Track chatbot closed
                if (typeof window !== 'undefined' && window.trackEvent) {
                  window.trackEvent('Engagement', 'Chatbot Closed', 'Manual Close', undefined, {
                    event_params: {
                      conversation_length: messages.length,
                      had_interaction: messages.length > 1
                    }
                  });
                }
                setIsOpen(false);
              }}
              className="hover:bg-primary-600 p-1 rounded transition-colors"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Chat Content */}
        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.isBot
                        ? 'bg-foreground/5 text-foreground'
                        : 'bg-accent text-accent-content'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-foreground/5 text-foreground px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="border-t border-border p-4">
              <form onSubmit={sendMessage} className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="bg-accent hover:bg-accent-600 disabled:bg-foreground/30 disabled:cursor-not-allowed text-accent-content p-2 rounded-lg transition-colors btn"
                  aria-label="Envoyer"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;

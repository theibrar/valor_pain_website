import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Minus, Maximize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}


const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Elena, your personal advisor at Valor Pain & Wellness. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, { role: 'user', content: userMessage }].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error: any) {
      console.error('Chat error details:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again or call us at +1 469-215-8538. Error: " + (error.message || 'Unknown error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="chat-window"
          >
            {/* Header */}
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <div style={{ position: 'relative' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" 
                    alt="Elena" 
                    className="chat-profile-img"
                  />
                  <div className="chat-status-dot"></div>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-sans)', color: 'white' }}>Elena</h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.9, color: 'white' }}>Senior Care Advisor • Online</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button 
                  onClick={() => setIsMinimized(true)}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '6px' }}
                  title="Minimize chat"
                >
                  <Minus size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '6px' }}
                  title="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ display: 'flex', justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start' }}
                >
                  <div className={`chat-bubble ${message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}>
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div className="chat-bubble chat-bubble-assistant" style={{ display: 'flex', gap: '4px', padding: '12px 16px' }}>
                    <div className="chat-loading-dot"></div>
                    <div className="chat-loading-dot"></div>
                    <div className="chat-loading-dot"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="chat-input-area">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                title="Send message"
                className="chat-send-btn"
                style={{ opacity: !input.trim() || isLoading ? 0.5 : 1 }}
              >
                <Send size={18} />
              </button>
            </form>
            <div style={{ textAlign: 'center', padding: '8px', backgroundColor: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
               <p style={{ margin: 0, fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <Bot size={12} /> Valor Pain & Wellness AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={`chat-toggle-btn ${isOpen && !isMinimized ? 'chat-toggle-btn-open' : 'chat-toggle-btn-closed'}`}
        title={isOpen && !isMinimized ? "Close Assistant" : "Chat with Elena"}
      >
        {isOpen && !isMinimized ? <X size={28} /> : <MessageSquare size={28} />}
        {isMinimized && (
          <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '20px', height: '20px', backgroundColor: '#ef4444', color: 'white', fontSize: '10px', fontWeight: 'bold', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
            1
          </div>
        )}
      </motion.button>

      {/* Minimized Bar */}
      <AnimatePresence>
        {isOpen && isMinimized && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => setIsMinimized(false)}
            className="chat-minimized-bar"
          >
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" 
              style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
              alt="Elena avatar"
            />
            <span style={{ fontWeight: 500 }}>Elena is waiting...</span>
            <Maximize2 size={16} style={{ opacity: 0.6 }} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;

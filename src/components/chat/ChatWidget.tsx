import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ChatWidget = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: t('chat.welcome'), isBot: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = language === 'en' 
        ? [
            "The Sand Sculpture Museum is a hidden gem near Chamundi Hill! It opens at 9 AM and the entry is just ₹50.",
            "Devaraja Market is best visited early morning (6-10 AM) when the flower vendors create stunning displays!",
            "To say 'Thank you' in Kannada, say 'Dhanyavada' (ಧನ್ಯವಾದ). Locals appreciate it!",
            "The best time to visit Mysuru is October-February, especially during Dasara in October!",
          ]
        : [
            "ಮರಳು ಶಿಲ್ಪ ವಸ್ತುಸಂಗ್ರಹಾಲಯವು ಚಾಮುಂಡಿ ಬೆಟ್ಟದ ಬಳಿ ಗುಪ್ತ ರತ್ನವಾಗಿದೆ! ಇದು ಬೆಳಿಗ್ಗೆ 9 ಗಂಟೆಗೆ ತೆರೆಯುತ್ತದೆ.",
            "ದೇವರಾಜ ಮಾರುಕಟ್ಟೆಗೆ ಬೆಳಿಗ್ಗೆ ಬೇಗ (6-10 AM) ಭೇಟಿ ನೀಡುವುದು ಉತ್ತಮ!",
            "ಮೈಸೂರಿಗೆ ಭೇಟಿ ನೀಡಲು ಉತ್ತಮ ಸಮಯ ಅಕ್ಟೋಬರ್-ಫೆಬ್ರವರಿ!",
          ];

      const botMessage: Message = {
        id: Date.now(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-elevated flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen 
            ? "bg-muted text-foreground rotate-90" 
            : "bg-gradient-royal text-primary-foreground"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm bg-card rounded-2xl shadow-elevated border border-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-royal p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mysore-gold/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-mysore-gold" />
              </div>
              <div>
                <h3 className="font-semibold">{t('chat.title')}</h3>
                <p className="text-xs text-primary-foreground/70">
                  {language === 'en' ? 'Your Mysuru Guide' : 'ನಿಮ್ಮ ಮೈಸೂರು ಮಾರ್ಗದರ್ಶಿ'}
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "max-w-[85%] p-3 rounded-2xl text-sm",
                  message.isBot
                    ? "bg-card shadow-soft rounded-tl-sm"
                    : "bg-primary text-primary-foreground ml-auto rounded-tr-sm"
                )}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chat.placeholder')}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" variant="royal">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

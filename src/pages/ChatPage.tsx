import { useState, useRef, useEffect } from "react";
import { Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ChatMessage from "@/components/ChatMessage";
import TypingIndicator from "@/components/TypingIndicator";

interface Message {
  id: number;
  role: "user" | "ai";
  content: string;
  references?: string[];
}

const sampleMessages: Message[] = [
  {
    id: 1,
    role: "user",
    content: "What are the legal consequences of cheque bounce in India?",
  },
  {
    id: 2,
    role: "ai",
    content:
      "Under the Negotiable Instruments Act, 1881, a cheque bounce is a criminal offence under Section 138. The drawer can face imprisonment up to 2 years, or a fine up to twice the cheque amount, or both. The payee must issue a legal notice within 30 days of receiving the 'return memo' from the bank.",
    references: ["NI Act Section 138", "NI Act Section 141", "IPC Section 420"],
  },
];

const languages = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिंदी (Hindi)" },
  { value: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { value: "ta", label: "தமிழ் (Tamil)" },
  { value: "te", label: "తెలుగు (Telugu)" },
  { value: "bn", label: "বাংলা (Bengali)" },
  { value: "mr", label: "मराठी (Marathi)" },
];

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("en");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Placeholder: POST /api/ask
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          content:
            "Thank you for your question. Based on Indian legal provisions, I can provide the following information. Please consult a qualified lawyer for specific advice regarding your case.",
          references: ["IPC Section 406"],
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] max-h-[calc(100vh-3rem)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-card">
        <div>
          <h1 className="text-lg font-display font-bold text-foreground">Legal AI Assistant</h1>
          <p className="text-xs text-muted-foreground">Ask any legal question in your preferred language</p>
        </div>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[160px] h-9">
            <Globe className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            role={msg.role}
            content={msg.content}
            references={msg.references}
            onTranslate={msg.role === "ai" ? () => {} : undefined}
          />
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Disclaimer */}
      <div className="px-4 md:px-6">
        <p className="text-[11px] text-muted-foreground text-center py-1.5 border-t border-dashed">
          ⚠️ This is AI-generated legal information, not legal advice. Always consult a qualified lawyer.
        </p>
      </div>

      {/* Input */}
      <div className="px-4 md:px-6 pb-4 pt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a legal question..."
            className="flex-1 h-11 bg-card"
          />
          <Button type="submit" size="icon" className="h-11 w-11 shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useEffect, useCallback } from "react";
<<<<<<< HEAD
import { Send, Globe, Mic, MicOff, Scale } from "lucide-react";
=======
import { Send, Globe, Mic, MicOff } from "lucide-react";
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ChatMessage from "@/components/ChatMessage";
import TypingIndicator from "@/components/TypingIndicator";

import { useToast } from "@/hooks/use-toast";
import { findLegalAnswer, findLegalReferences, FALLBACK_RESPONSE } from "@/data/legalDataset";
import { translateText, detectInputLanguage } from "@/lib/translate";

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
      "Under the Negotiable Instruments Act, 1881, a cheque bounce is a criminal offence under Section 138. The drawer can face imprisonment up to 2 years, or a fine up to twice the cheque amount, or both. The payee must issue a legal notice within 30 days of receiving the return memo from the bank.",
    references: ["NI Act Section 138", "NI Act Section 141", "NI Act Section 142"],
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

// Maps language codes to browser SpeechRecognition locale strings
const langCodes: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  pa: "pa-IN",
  ta: "ta-IN",
  te: "te-IN",
  bn: "bn-IN",
  mr: "mr-IN",
};

<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

=======
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isListening, setIsListening] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const { toast } = useToast();

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = useCallback(
    (text?: string) => {
      const msg = text ?? input;
      if (!msg.trim()) return;

      const userMsg: Message = {
        id: Date.now(),
        role: "user",
        content: msg,
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      setTimeout(async () => {
        try {
<<<<<<< HEAD
          const englishQuestion =
            language === "en"
              ? msg
              : await translateText(msg, "en", language);
          
=======
          // ── STEP 1: Translate user question → English for dataset matching ──
          // detectInputLanguage checks for non-Latin script (Hindi, Bengali etc.)
          // and passes "auto" so MyMemory detects the source language correctly.
const englishQuestion =
  language === "en"
    ? msg
    : await translateText(msg, "en", language); // pass actual language code, not "auto"
          console.log("[NyayaSetu] English question:", englishQuestion);

          // ── STEP 2: Search the dataset using the English question ──
          // findLegalAnswer returns string|null — use ?? to fall back
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
          const matchedAnswer = findLegalAnswer(englishQuestion);
          const matchedRefs = findLegalReferences(englishQuestion);
          const englishResponse = matchedAnswer ?? FALLBACK_RESPONSE;

<<<<<<< HEAD
          // Save query to backend asynchronously
          const detectedCategory = matchedRefs.length > 0 ? matchedRefs[0].split(' ')[0] : "General";
          const storedUser = localStorage.getItem("nyaya_user");
          const user = storedUser ? JSON.parse(storedUser) : null;
          
          fetch("http://localhost:8080/api/queries/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: user?.id?.toString() || "guest_" + (sessionStorage.getItem('nyaya_session') || Date.now()),
              sessionId: "sess_" + (sessionStorage.getItem('nyaya_session') || Date.now()),
              queryText: msg,
              category: detectedCategory
            })
          }).catch(console.error);

=======
          // ── STEP 3: Translate AI response → user's selected language ──
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
          const translatedResponse =
            language === "en"
              ? englishResponse
              : await translateText(englishResponse, language, "en");

          const aiMsg: Message = {
            id: Date.now() + 1,
            role: "ai",
            content: translatedResponse,
            references: matchedRefs,
          };

          setMessages((prev) => [...prev, aiMsg]);
        } catch (err) {
          console.error("[NyayaSetu] handleSend error:", err);
<<<<<<< HEAD
=======

          toast({
            title: "Translation failed",
            description: "Could not translate. Showing English response.",
            variant: "destructive",
          });

          // Fallback: show English response without translation
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
          const englishResponse = findLegalAnswer(msg) ?? FALLBACK_RESPONSE;
          const englishRefs = findLegalReferences(msg);

          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              role: "ai",
              content: englishResponse,
              references: englishRefs,
            },
          ]);
        } finally {
          setIsTyping(false);
        }
      }, 1000);
    },
    [input, language, toast]
  );

  const toggleVoiceInput = useCallback(() => {
    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      toast({
        title: "Voice input not supported",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive",
      });
      return;
    }

<<<<<<< HEAD
=======
    // Stop existing recognition session
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();
<<<<<<< HEAD
    recognition.lang = langCodes[language] || "en-IN";
    recognition.interimResults = true;
    recognition.continuous = false;
    recognitionRef.current = recognition;

    recognition.onstart = () => setIsListening(true);
=======

    recognition.lang = langCodes[language] || "en-IN";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognitionRef.current = recognition;

    recognition.onstart = () => setIsListening(true);

>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((r: any) => r[0].transcript)
        .join("");
<<<<<<< HEAD
      setInput(transcript);
      if (event.results[0].isFinal) setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
=======

      setInput(transcript);

      if (event.results[0].isFinal) {
        setIsListening(false);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      toast({
        title: "Voice input error",
        description: "Could not recognize speech. Please try again.",
        variant: "destructive",
      });
    };

    recognition.onend = () => setIsListening(false);

>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
    recognition.start();
  }, [isListening, language, toast]);

  return (
<<<<<<< HEAD
    <PageTransition className="flex flex-col h-[calc(100vh-3.5rem)] max-h-[calc(100vh-3.5rem)] relative bg-navy overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-saffron/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10 bg-navy/80 backdrop-blur-xl sticky top-0 z-10 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron to-primary flex items-center justify-center shadow-2xl shadow-primary/20 border border-white/10">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-display font-black text-white leading-tight tracking-tight">
              NyayaSetu <span className="text-saffron">AI</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22C55E]" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40">
                Core Logic Active
              </p>
            </div>
          </div>
        </div>

        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[160px] h-11 bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all rounded-xl shadow-xl">
            <Globe className="w-4 h-4 mr-2 text-saffron" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-navy border-white/10 text-white backdrop-blur-3xl rounded-xl">
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value} className="hover:bg-white/5 transition-colors">
=======
    <div className="flex flex-col h-[calc(100vh-3rem)] max-h-[calc(100vh-3rem)]">
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-card">
        <div>
          <h1 className="text-lg font-display font-bold text-foreground">
            NyayaSetu AI
          </h1>
          <p className="text-xs text-muted-foreground">
            Ask any legal question in your preferred language
          </p>
        </div>

        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[160px] h-9">
            <Globe className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.value} value={lang.value}>
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* ── Messages ── */}
      <div
        ref={scrollRef}
<<<<<<< HEAD
        className="flex-1 overflow-y-auto px-4 md:px-10 py-8 space-y-8 scroll-smooth"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              role={msg.role}
              content={msg.content}
              references={msg.references}
              onTranslate={msg.role === "ai" ? () => {} : undefined}
            />
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <TypingIndicator />
          </motion.div>
        )}
      </div>

      {/* ── Input Bar ── */}
      <div className="px-4 md:px-10 pb-8 pt-2">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-4">
            <p className="text-[10px] text-muted-foreground text-center uppercase tracking-[0.2em] font-bold opacity-60">
              AI-generated information • Not legal advice
            </p>
          </div>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="relative flex items-center gap-2 p-2 rounded-2xl bg-card border border-border/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] focus-within:border-primary/40 focus-within:shadow-primary/5 transition-all duration-300"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a legal question in any language..."
              className="flex-1 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-12 text-base px-4"
            />

            <div className="flex items-center gap-1.5 px-1">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className={`h-11 w-11 rounded-xl transition-all ${isListening ? "bg-destructive/10 text-destructive animate-pulse" : "hover:bg-primary/5 text-muted-foreground hover:text-primary"}`}
                onClick={toggleVoiceInput}
              >
                {isListening ? (
                  <MicOff className="w-5 h-5" />
                ) : (
                  <Mic className="w-5 h-5" />
                )}
              </Button>

              <Button type="submit" size="icon" className="h-11 w-11 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </PageTransition>
=======
        className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-4"
      >
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

      {/* ── Disclaimer ── */}
      <div className="px-4 md:px-6">
        <p className="text-[11px] text-muted-foreground text-center py-1.5 border-t border-dashed">
          ⚠️ This is AI-generated legal information, not legal advice. Always
          consult a qualified lawyer.
        </p>
      </div>

      {/* ── Input Bar ── */}
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

          <Button
            type="button"
            size="icon"
            variant={isListening ? "destructive" : "outline"}
            className={`h-11 w-11 shrink-0 ${isListening ? "animate-pulse" : ""}`}
            onClick={toggleVoiceInput}
          >
            {isListening ? (
              <MicOff className="w-4 h-4" />
            ) : (
              <Mic className="w-4 h-4" />
            )}
          </Button>

          <Button type="submit" size="icon" className="h-11 w-11 shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
  );
};

export default ChatPage;
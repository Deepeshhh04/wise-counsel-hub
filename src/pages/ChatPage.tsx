/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Send,
  Globe,
  Mic,
  MicOff,
  Scale,
} from "lucide-react";

import { AnimatePresence } from "framer-motion";

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
import { PageTransition } from "@/components/PageTransition";

import { useToast } from "@/hooks/use-toast";

import {
  findLegalAnswer,
  findLegalReferences,
  FALLBACK_RESPONSE,
} from "@/data/legalDataset";

import { translateText } from "@/lib/translate";

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
      "Under the Negotiable Instruments Act, 1881, a cheque bounce is a criminal offence under Section 138.",
    references: [
      "NI Act Section 138",
      "NI Act Section 141",
      "NI Act Section 142",
    ],
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

const langCodes: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  pa: "pa-IN",
  ta: "ta-IN",
  te: "te-IN",
  bn: "bn-IN",
  mr: "mr-IN",
};

const ChatPage = () => {
  const [messages, setMessages] =
    useState<Message[]>(sampleMessages);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isListening, setIsListening] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const { toast } = useToast();

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
          const englishQuestion =
            language === "en"
              ? msg
              : await translateText(msg, "en", language);

          const matchedAnswer =
            findLegalAnswer(englishQuestion);

          const matchedRefs =
            findLegalReferences(englishQuestion);

          const englishResponse =
            matchedAnswer ?? FALLBACK_RESPONSE;

          const translatedResponse =
            language === "en"
              ? englishResponse
              : await translateText(
                englishResponse,
                language,
                "en"
              );

          const aiMsg: Message = {
            id: Date.now() + 1,
            role: "ai",
            content: translatedResponse,
            references: matchedRefs,
          };

          setMessages((prev) => [...prev, aiMsg]);
        } catch (err) {
          console.error(err);

          toast({
            title: "Translation failed",
            description:
              "Could not translate response.",
            variant: "destructive",
          });

          const englishResponse =
            findLegalAnswer(msg) ??
            FALLBACK_RESPONSE;

          const englishRefs =
            findLegalReferences(msg);

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
        description:
          "Your browser doesn't support speech recognition.",
        variant: "destructive",
      });

      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const recognition =
      new SpeechRecognitionAPI();

    recognition.lang =
      langCodes[language] || "en-IN";

    recognition.interimResults = true;
    recognition.continuous = false;

    recognitionRef.current = recognition;

    recognition.onstart = () =>
      setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((r: any) => r[0].transcript)
        .join("");

      setInput(transcript);

      if (event.results[0].isFinal) {
        setIsListening(false);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () =>
      setIsListening(false);

    recognition.start();
  }, [isListening, language, toast]);

  return (
    <PageTransition className="flex flex-col h-[calc(100vh-3.5rem)] bg-navy overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-saffron/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-white/10 bg-navy/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-saffron to-primary flex items-center justify-center">
            <Scale className="w-6 h-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-black text-white">
              NyayaSetu AI
            </h1>

            <p className="text-xs text-white/50 uppercase tracking-widest">
              Core Logic Active
            </p>
          </div>
        </div>

        <Select
          value={language}
          onValueChange={setLanguage}
        >
          <SelectTrigger className="w-[160px] h-11 bg-white border border-[#D6D3D1] text-[#0B1C3F] rounded-xl">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {languages.map((lang) => (
              <SelectItem
                key={lang.value}
                value={lang.value}
              >
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 md:px-10 py-8 space-y-8"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              role={msg.role}
              content={msg.content}
              references={msg.references}
            />
          ))}
        </AnimatePresence>

        {isTyping && <TypingIndicator />}
      </div>

      <div className="px-4 md:px-10 pb-8 pt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="relative flex items-center gap-2 p-2 rounded-2xl bg-card border border-border shadow-xl"
        >
          <Input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask a legal question..."
            className="flex-1 border-none bg-transparent focus-visible:ring-0"
          />

          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={toggleVoiceInput}
            className={`h-11 w-11 rounded-xl ${isListening
              ? "bg-red-500 text-white"
              : ""
              }`}
          >
            {isListening ? (
              <MicOff className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </Button>

          <Button
            type="submit"
            size="icon"
            className="h-11 w-11 rounded-xl bg-primary"
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </PageTransition>
  );
};

export default ChatPage;
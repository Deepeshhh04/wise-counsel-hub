import { Scale, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b

interface ChatMessageProps {
  role: "user" | "ai";
  content: string;
  references?: string[];
  onTranslate?: () => void;
}

const ChatMessage = ({ role, content, references, onTranslate }: ChatMessageProps) => {
  const isAI = role === "ai";

  return (
<<<<<<< HEAD
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
    >
      <div className={`max-w-[80%] md:max-w-[70%] space-y-2`}>
        <div
          className={`px-4 py-3 rounded-2xl text-sm shadow-sm leading-relaxed ${
            isAI
              ? "bg-ai-bubble text-ai-bubble-foreground rounded-tl-none border border-primary/5"
              : "bg-gradient-to-br from-primary to-primary/90 text-user-bubble-foreground rounded-tr-none shadow-md shadow-primary/10"
=======
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} animate-fade-in`}>
      <div className={`max-w-[80%] md:max-w-[70%] space-y-2`}>
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isAI
              ? "bg-ai-bubble text-ai-bubble-foreground rounded-tl-sm"
              : "bg-user-bubble text-user-bubble-foreground rounded-tr-sm"
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
          }`}
        >
          {content}
        </div>

        {isAI && references && references.length > 0 && (
<<<<<<< HEAD
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-1.5"
          >
            {references.map((ref) => (
              <span
                key={ref}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-reference-highlight text-reference-highlight-foreground border border-legal-gold/20 shadow-sm"
=======
          <div className="flex flex-wrap gap-1.5">
            {references.map((ref) => (
              <span
                key={ref}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-reference-highlight text-reference-highlight-foreground"
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
              >
                <Scale className="w-3 h-3" />
                {ref}
              </span>
            ))}
<<<<<<< HEAD
          </motion.div>
=======
          </div>
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
        )}

        {isAI && onTranslate && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onTranslate}
<<<<<<< HEAD
            className="text-xs text-muted-foreground hover:text-foreground hover:bg-primary/5 h-7 px-2 transition-all"
=======
            className="text-xs text-muted-foreground hover:text-foreground h-7 px-2"
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
          >
            <Languages className="w-3.5 h-3.5 mr-1" />
            Translate
          </Button>
        )}
      </div>
<<<<<<< HEAD
    </motion.div>
=======
    </div>
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
  );
};

export default ChatMessage;

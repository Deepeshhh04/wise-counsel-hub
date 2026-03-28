import { Scale, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessageProps {
  role: "user" | "ai";
  content: string;
  references?: string[];
  onTranslate?: () => void;
}

const ChatMessage = ({ role, content, references, onTranslate }: ChatMessageProps) => {
  const isAI = role === "ai";

  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} animate-fade-in`}>
      <div className={`max-w-[80%] md:max-w-[70%] space-y-2`}>
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isAI
              ? "bg-ai-bubble text-ai-bubble-foreground rounded-tl-sm"
              : "bg-user-bubble text-user-bubble-foreground rounded-tr-sm"
          }`}
        >
          {content}
        </div>

        {isAI && references && references.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {references.map((ref) => (
              <span
                key={ref}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-reference-highlight text-reference-highlight-foreground"
              >
                <Scale className="w-3 h-3" />
                {ref}
              </span>
            ))}
          </div>
        )}

        {isAI && onTranslate && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onTranslate}
            className="text-xs text-muted-foreground hover:text-foreground h-7 px-2"
          >
            <Languages className="w-3.5 h-3.5 mr-1" />
            Translate
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

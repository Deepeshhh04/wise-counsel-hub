const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-4 py-3 bg-ai-bubble rounded-2xl rounded-tl-sm w-fit">
    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-typing-dot-1" />
    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-typing-dot-2" />
    <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-typing-dot-3" />
  </div>
);

export default TypingIndicator;

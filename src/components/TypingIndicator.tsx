import { motion } from "framer-motion";

const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-4 py-3 bg-ai-bubble/50 backdrop-blur-sm rounded-2xl rounded-tl-none border border-primary/5 w-fit shadow-sm">

    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-primary/40"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default TypingIndicator;
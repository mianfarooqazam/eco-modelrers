"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function TypewriterTitle({
  words = ["Eco-friendly", "Net Zero", "Green Certified"],
  typingSpeed = 60,
  startDelay = 500,
  autoLoop = true,
  loopDelay = 1200,
}) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isActive = true;
    const typeText = async () => {
      const wordElement = scope.current.querySelector("[data-typewriter-word]");
      if (!wordElement) return;
      let wordIndex = 0;
      while (isActive) {
        const word = words[wordIndex];
        // Type out the word
        for (let i = 0; i < word.length; i++) {
          if (!isActive) break;
          wordElement.textContent = word.slice(0, i + 1);
          await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        }
        await new Promise((resolve) => setTimeout(resolve, loopDelay));
        // Delete the word
        for (let i = word.length; i > 0; i--) {
          if (!isActive) break;
          wordElement.textContent = word.slice(0, i - 1);
          await new Promise((resolve) => setTimeout(resolve, typingSpeed / 2));
        }
        wordIndex = (wordIndex + 1) % words.length;
        if (!autoLoop && wordIndex === 0) break;
      }
    };
    typeText();
    return () => { isActive = false; };
  }, [words, typingSpeed, startDelay, autoLoop, loopDelay, animate, scope]);

  return (
    <div className="relative w-full max-w-2xl mx-auto py-12">
      <div className="relative z-10 flex flex-col items-start justify-center" ref={scope}>
        <motion.div
          className="text-3xl md:text-5xl font-mono text-black dark:text-white tracking-tight flex flex-col items-start gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="leading-tight">Engineering Solutions</span>
          <span className="leading-tight">for a sustainable</span>
          <span
            data-typewriter-word
            className="inline-block border-r-2 border-black dark:border-white animate-cursor pr-1 min-w-[6ch] text-green-300"
          >
            {words[0]}
          </span>
        </motion.div>
      </div>
    </div>
  );
} 
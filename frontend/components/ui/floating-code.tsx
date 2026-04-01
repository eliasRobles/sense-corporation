"use client";

import { useEffect, useState } from "react";

const codeSnippets = [
  "const transform = async () => {...}",
  "interface Technology {...}",
  "export default function Innovation()",
  "import { Future } from 'tomorrow'",
  "class Enterprise extends Success",
  "const modernize = () => scale()",
  "async function deploy() {...}",
  "type Solution<T> = Promise<T>",
];

export function FloatingCode() {
  const [mounted, setMounted] = useState(false);
  const [codes, setCodes] = useState<
    Array<{
      id: number;
      text: string;
      x: number;
      y: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setMounted(true);
    
    const codeElements = codeSnippets.map((text, i) => ({
      id: i,
      text,
      x: Math.random() * 80 + 10, // 10-90% width
      y: Math.random() * 60 + 20, // 20-80% height
      duration: Math.random() * 10 + 15, // 15-25s
      delay: Math.random() * 5,
    }));

    setCodes(codeElements);
  }, []);

  // Don't render anything until mounted on client
  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {codes.map((code) => (
        <div
          key={code.id}
          className="absolute text-primary/40 font-mono text-xs md:text-sm animate-float-code"
          style={{
            left: `${code.x}%`,
            top: `${code.y}%`,
            animationDuration: `${code.duration}s`,
            animationDelay: `${code.delay}s`,
          }}
        >
          {code.text}
        </div>
      ))}
    </div>
  );
}

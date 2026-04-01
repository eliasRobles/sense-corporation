"use client";

import { useEffect, useRef } from "react";

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const gridSize = 40;
    const dots: { x: number; y: number; opacity: number; delay: number }[] = [];

    // Create dot grid
    for (let x = 0; x < canvas.offsetWidth; x += gridSize) {
      for (let y = 0; y < canvas.offsetHeight; y += gridSize) {
        dots.push({
          x,
          y,
          opacity: Math.random(),
          delay: Math.random() * 2000,
        });
      }
    }

    let startTime = Date.now();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const currentTime = Date.now() - startTime;

      dots.forEach((dot) => {
        const timeSinceStart = currentTime - dot.delay;
        if (timeSinceStart < 0) return;

        // Pulsating effect
        const pulse = Math.sin(timeSinceStart * 0.001) * 0.5 + 0.5;
        const opacity = 0.1 + pulse * 0.3;

        // Draw dot
        ctx.fillStyle = `rgba(234, 88, 12, ${opacity})`; // primary color with opacity
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines to nearby dots
        dots.forEach((otherDot) => {
          const dx = otherDot.x - dot.x;
          const dy = otherDot.y - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < gridSize * 1.5 && distance > 0) {
            const lineOpacity = (1 - distance / (gridSize * 1.5)) * opacity * 0.2;
            ctx.strokeStyle = `rgba(234, 88, 12, ${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      style={{ pointerEvents: "none" }}
    />
  );
}

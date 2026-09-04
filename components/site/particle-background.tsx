"use client";

import {useEffect, useRef} from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let animationFrame = 0;

    const particles = Array.from({length: 26}, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 2.4 + 1.2,
      velocityX: (Math.random() - 0.5) * 0.0006,
      velocityY: (Math.random() - 0.5) * 0.0006
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach(particle => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < 0 || particle.x > 1) {
          particle.velocityX *= -1;
        }

        if (particle.y < 0 || particle.y > 1) {
          particle.velocityY *= -1;
        }

        const x = particle.x * window.innerWidth;
        const y = particle.y * window.innerHeight;

        context.beginPath();
        context.fillStyle = "rgba(56, 189, 248, 0.26)";
        context.arc(x, y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20 opacity-70"
      aria-hidden="true"
    />
  );
}

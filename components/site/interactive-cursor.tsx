"use client";

import {useEffect, useState} from "react";

export function InteractiveCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const media = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!media.matches || reducedMotion.matches) {
      return;
    }

    setEnabled(true);

    const handleMove = (event: MouseEvent) => {
      setPosition({x: event.clientX, y: event.clientY});
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  if (!isMounted || !enabled) {
    return null;
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[60] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 mix-blend-screen md:block"
        style={{left: position.x, top: position.y}}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[59] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm transition-transform duration-150 md:block"
        style={{left: position.x, top: position.y}}
      />
    </>
  );
}

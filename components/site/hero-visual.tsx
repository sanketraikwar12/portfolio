"use client";

import {motion} from "framer-motion";

const orbitItems = [
  {label: "React.js", className: "left-0 top-10"},
  {label: "Next.js", className: "right-4 top-4"},
  {label: "FastAPI", className: "right-0 bottom-24"},
  {label: "AI", className: "left-8 bottom-8"},
  {label: "Power BI", className: "left-1/2 top-0 -translate-x-1/2"},
  {label: "TypeScript", className: "left-1/2 bottom-0 -translate-x-1/2"}
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center">
      <motion.div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/25 via-sky-500/10 to-indigo-500/20 blur-3xl"
        animate={{scale: [1, 1.05, 1], opacity: [0.5, 0.9, 0.5]}}
        transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
      />
      <motion.div
        className="glass-panel relative flex h-[72%] w-[72%] flex-col items-center justify-center rounded-[2.5rem] border border-white/15 p-10 text-center"
        animate={{y: [0, -10, 0]}}
        transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
      >
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />
        <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/15 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-4xl font-semibold text-white shadow-glow">
          SR
        </div>
        <div className="relative mt-6 space-y-3">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Premium Portfolio
          </p>
          <h3 className="text-2xl font-semibold">AI + Full Stack Builder</h3>
          <p className="mx-auto max-w-xs text-sm leading-6 text-muted-foreground">
            Building polished digital products with modern web, AI, and analytics
            workflows.
          </p>
        </div>
      </motion.div>
      {orbitItems.map((item, index) => (
        <motion.div
          key={item.label}
          className={`glass-panel absolute rounded-full px-4 py-2 text-xs font-medium text-foreground ${item.className}`}
          initial={{opacity: 0, scale: 0.92}}
          animate={{opacity: 1, scale: 1, y: [0, index % 2 === 0 ? -8 : 8, 0]}}
          transition={{
            opacity: {duration: 0.5, delay: index * 0.08},
            scale: {duration: 0.5, delay: index * 0.08},
            y: {duration: 5 + index, repeat: Infinity, ease: "easeInOut"}
          }}
        >
          {item.label}
        </motion.div>
      ))}
    </div>
  );
}

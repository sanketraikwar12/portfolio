"use client";

import {motion} from "framer-motion";

const orbitItems = [
  {label: "React.js", className: "left-0 top-6"},
  {label: "Next.js", className: "right-2 top-4"},
  {label: "FastAPI", className: "right-0 bottom-6"},
  {label: "AI", className: "left-4 bottom-4"},
  {label: "Power BI", className: "left-1/2 -top-2 -translate-x-1/2"},
  {label: "TypeScript", className: "left-1/2 -bottom-2 -translate-x-1/2"}
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[24rem] items-center justify-center py-6">
      <motion.div
        aria-hidden="true"
        className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/15 blur-2xl"
        animate={{scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5]}}
        transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}}
      />
      <motion.div
        className="glass-panel relative w-full max-w-[20rem] flex-col items-center justify-center rounded-2xl border border-white/15 p-5 text-center sm:p-6"
        animate={{y: [0, -6, 0]}}
        transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-xl font-semibold text-white shadow-glow">
          SR
        </div>
        <div className="relative mt-3 space-y-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary">
            Premium Portfolio
          </p>
          <h3 className="text-base font-semibold sm:text-lg">AI + Full Stack Builder</h3>
          <p className="mx-auto max-w-xs text-xs leading-5 text-muted-foreground">
            Building polished digital products with modern web, AI, and analytics
            workflows.
          </p>
        </div>
      </motion.div>
      {orbitItems.map((item, index) => (
        <motion.div
          key={item.label}
          className={`glass-panel absolute rounded-full px-2.5 py-1 text-[11px] font-medium text-foreground ${item.className}`}
          initial={{opacity: 0, scale: 0.92}}
          animate={{opacity: 1, scale: 1, y: [0, index % 2 === 0 ? -6 : 6, 0]}}
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

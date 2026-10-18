"use client";

import {motion, useReducedMotion} from "framer-motion";
import {useMounted} from "@/lib/use-mounted";
import {cn} from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({children, className, delay = 0}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const isMounted = useMounted();

  return (
    <motion.div
      className={cn(className)}
      initial={isMounted && !reducedMotion ? {opacity: 0, y: 24} : false}
      whileInView={isMounted && !reducedMotion ? {opacity: 1, y: 0} : {}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.55, ease: [0.22, 1, 0.36, 1], delay}}
    >
      {children}
    </motion.div>
  );
}

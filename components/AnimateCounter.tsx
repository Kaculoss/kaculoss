"use client";

import { useRef, useEffect } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

interface IProps {
  value: number;
  desc: string;
}

const AnimateCounter = ({ value, desc }: IProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [value, motionValue, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [value, springValue]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="inline-block text-white text-3xl font-bold tracking-widest">
        <span ref={ref} />+
      </span>
      <p className="text-secondary text-sm text-center">{desc}</p>
    </div>
  );
};

export default AnimateCounter;

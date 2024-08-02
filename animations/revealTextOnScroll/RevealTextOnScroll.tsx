"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useMemo, useRef } from "react";
import styles from "./RevealTextOnScroll.module.css";

type Props = {
  text: string;
};

export default function RevealTextOnScroll({ text }: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

type WordProps = {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
};

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  const transformY = useTransform(progress, range, ["100%", "0%"]);

  return (
    <motion.span className={styles.word} style={{ opacity, y: transformY }}>
      {children}
    </motion.span>
  );
}

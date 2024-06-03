"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const TextReveal = ({ children }) => {
  const controls = useAnimation();
  const textRef = useRef(null);
  const isInView = useInView(textRef);

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }, [isInView, controls]);

  return (
    <div ref={textRef} style={{ overflow: "hidden" }}>
      <motion.div initial={{ y: "100%", opacity: 0 }} animate={controls}>
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;

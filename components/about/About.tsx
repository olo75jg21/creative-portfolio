"use client";

import RevealTextOnScroll from "@/animations/revealTextOnScroll/RevealTextOnScroll";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/Theme";
import { useInView } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  const background = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    background.setTheme("var(--creme-color)");
  }, [background, isInView]);

  return (
    <div ref={ref} className={`typo-lg px-main ${styles.container}`}>
      <RevealTextOnScroll text="Lorem Ipsum is simply dummy text of since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
    </div>
  );
};

export default About;

"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./HorizontalCarousel.module.css";

type Props = {
  text: string;
};

const HorizontalCarousel = ({ text }: Props) => {
  const content = useMemo(() => {
    return new Array(1).fill(text);
  }, [text]);

  const duplicatedContent = [...content, ...content];

  return (
    <div className={styles.carousel}>
      <motion.div
        className={styles.innerCarousel}
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedContent.map((slide, index) => (
          <div
            key={index}
            className={styles.carouselItemWrapper}
            style={{ width: `${100 / content.length}%` }}
          >
            <div className={styles.carouselItem}>{slide}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalCarousel;

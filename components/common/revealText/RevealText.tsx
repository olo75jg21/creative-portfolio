"use client";

import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  text: string;
};

const RevealText = ({ text }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  console.log(inView);

  const ctrls = useAnimation();

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }

    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},

    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,

      y: `0.25em`,
    },

    visible: {
      opacity: 1,

      y: `0em`,

      transition: {
        duration: 1,

        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,

              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default RevealText;

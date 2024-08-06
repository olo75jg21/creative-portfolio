"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Cursor.module.css";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

enum CursorVariant {
  DEFAULT = "default",
}

const Cursor = () => {
  const borderRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [cursorVariant, setCursorVariant] = useState<CursorVariant>(
    CursorVariant.DEFAULT
  );

  const ref = React.useRef(null);

  const { x, y } = useMousePosition();

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x,
      y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  return (
    <motion.div
      className={style.cursor}
      ref={borderRef}
      variants={variants}
      animate={cursorVariant}
    >
      <div ref={innerRef} />
    </motion.div>
  );
};

export default Cursor;

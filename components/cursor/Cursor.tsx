"use client";

import React, { useRef, useState } from "react";
import style from "./Cursor.module.css";
import useMousePosition from "@/hooks/useMousePosition";
import { motion, useSpring } from "framer-motion";

enum CursorVariant {
  DEFAULT = "default",
}

const Cursor = () => {
  const [outerCursorSize, setOuterCursorSize] = useState<number>(50);
  const [innerCursorSize, setInnerCursorSize] = useState<number>(10);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>(
    CursorVariant.DEFAULT
  );

  const { x: xOuter, y: yOuter } = useMousePosition({
    centerOffset: outerCursorSize,
  });
  const { x: xInner, y: yInner } = useMousePosition({
    centerOffset: innerCursorSize,
  });

  const outerSmoothOptions = { damping: 50, stiffness: 300, mass: 0.1 };
  const outerSmoothMouse = {
    x: useSpring(xOuter, outerSmoothOptions),
    y: useSpring(yOuter, outerSmoothOptions),
  };

  const innerSmoothOptions = { damping: 40, stiffness: 2000, mass: 0.1 };
  const innerSmoothMouse = {
    x: useSpring(xInner, innerSmoothOptions),
    y: useSpring(yInner, innerSmoothOptions),
  };

  const outerCursorVariants = {
    default: () => ({
      opacity: 1,
      height: outerCursorSize,
      width: outerCursorSize,
      fontSize: "16px",
    }),
  };

  const innerCursorVariants = {
    default: () => ({
      opacity: 1,
      height: innerCursorSize,
      width: innerCursorSize,
      fontSize: "16px",
    }),
  };

  return (
    <motion.div
      className={style.outerCursor}
      style={{
        left: outerSmoothMouse.x,
        top: outerSmoothMouse.y,
      }}
      variants={outerCursorVariants}
      animate={cursorVariant}
    >
      <motion.div
        className={style.innerCursor}
        style={{
          left: innerSmoothMouse.x,
          top: innerSmoothMouse.y,
        }}
        variants={innerCursorVariants}
        animate={cursorVariant}
      />
    </motion.div>
  );
};

export default Cursor;
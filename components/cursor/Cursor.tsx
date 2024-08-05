"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./Cursor.module.css";

enum CursorVariant {
  DEFAULT,
}

const Cursor = () => {
  const borderRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (borderRef.current && innerRef.current) {
        const { clientX, clientY } = event;
        const mouseX = clientX - borderRef.current.clientWidth / 2;
        const mouseY = clientY - borderRef.current.clientHeight / 2;
        borderRef.current.style.left = `${mouseX}px`;
        borderRef.current.style.top = `${mouseY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [borderRef, innerRef]);

  const [cursorVariant, setCursorVariant] = useState<CursorVariant>(
    CursorVariant.DEFAULT
  );

  const ref = React.useRef(null);

  return (
    <div className={style.cursor} ref={borderRef}>
      <div ref={innerRef} />
    </div>
  );
};

export default Cursor;

"use client";
import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

type Props = {
  children: React.ReactNode;
};

const Scroll = ({ children }: Props) => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default Scroll;

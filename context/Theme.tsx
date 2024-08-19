"use client";

import setCSSVariable from "@/utils/setCssVariable";
import { createContext, useCallback, useContext, useState } from "react";

type Background = "var(--white-color)" | "var(--creme-color)";

type ThemeContextType = {
  background: Background;
  setTheme: (background: Background) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const [background, setBackground] =
    useState<Background>("var(--white-color)");

  const setTheme = useCallback((background: Background) => {
    setBackground(background);

    setCSSVariable("--bgColor", background);
  }, []);

  return (
    <ThemeContext.Provider value={{ background, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

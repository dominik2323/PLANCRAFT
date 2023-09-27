"use client";

import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../types/styled";

export const BackgroundGridContext = createContext<Theme>(null);

export const BackgroundGridProvider = ({ children }) => {
  const [gapSize, setGapSize] = useState<number>(1);
  const [columnCount, setColumnCount] = useState<number>(0);
  const [plusSize, setPlusSize] = useState<number>(0);

  const isLayoutReady = gapSize > 1 && columnCount > 0 && plusSize > 0;

  return (
    <ThemeProvider
      theme={{
        gapSize,
        setGapSize,
        columnCount,
        setColumnCount,
        plusSize,
        setPlusSize,
        isLayoutReady,
      }}>
      {children}
    </ThemeProvider>
  );
};

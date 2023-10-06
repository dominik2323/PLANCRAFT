"use client";

import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../types/styled";
import { useWindowSize } from "../../hooks/useWindowSize";
import { device } from "../../consts/breakpoints";

export const BackgroundGridContext = createContext<Theme>(null);

export const BackgroundGridProvider = ({ children }) => {
  const [gapSize, setGapSize] = useState<number>(1);
  const [columnCount, setColumnCount] = useState<number>(0);
  const [plusSize, setPlusSize] = useState<number>(0);
  const [dotSize, setDotSize] = useState<number>(1);
  const { w } = useWindowSize();

  const isLayoutReady = gapSize > 1 && columnCount > 0 && plusSize > 0;

  useEffect(() => {
    setDotSize(w > device.monitor ? 2 : 1);
    setPlusSize(w <= device.tabletLandscape ? 13 : 21);
    setColumnCount(w <= device.phone ? 30 : 40);
  }, [w]);

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
        dotSize,
        setDotSize,
      }}>
      {children}
    </ThemeProvider>
  );
};

"use client";

import { createContext, useEffect, useLayoutEffect, useState } from "react";
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

  useLayoutEffect(() => {
    setDotSize(w > device.monitor ? 2 : 1);
    setPlusSize(
      w <= device.miniPhone ? 9 : w <= device.tabletLandscape ? 13 : 21
    );
    setColumnCount(w <= device.phone ? 20 : 40);
    const gapSize = w / columnCount || 1;
    setGapSize(gapSize);
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

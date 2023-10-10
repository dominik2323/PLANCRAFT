"use client";

import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { device } from "../../consts/breakpoints";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Theme } from "../../types/styled";

export const BackgroundGridContext = createContext<Theme>(null);

export const BackgroundGridProvider = ({ children }) => {
  const [gapSize, setGapSize] = useState<number>(1);
  const [columnCount, setColumnCount] = useState<number>(0);
  const [plusSize, setPlusSize] = useState<number>(0);
  const [dotSize, setDotSize] = useState<number>(1);
  const [isLayoutVisible, setisLayoutVisible] = useState<boolean>(false);
  const { w } = useWindowSize();

  const isLayoutReady = gapSize > 1 && columnCount > 0 && plusSize > 0;

  useEffect(() => {
    const _columnCount = w <= device.phone ? 20 : 40;
    const _gapSize = w / _columnCount || 1;
    setDotSize(w > device.monitor ? 2 : 1);
    setPlusSize(
      w <= device.miniPhone ? 9 : w <= device.tabletLandscape ? 13 : 21
    );
    setColumnCount(_columnCount);
    setGapSize(_gapSize);
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
        isLayoutVisible,
        setisLayoutVisible,
      }}>
      {children}
    </ThemeProvider>
  );
};

"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../../types/styled";

export const BackgroundGridContext = createContext<Theme>(null);

export const BackgroundGridProvider = ({ children }) => {
  const [gapSize, setGapSize] = useState<number>(0);
  const [columnCount, setColumnCount] = useState<number>(0);
  const [plusSize, setPlusSize] = useState<number>(0);

  return (
    <ThemeProvider
      theme={{
        gapSize,
        setGapSize,
        columnCount,
        setColumnCount,
        plusSize,
        setPlusSize,
      }}>
      {children}
    </ThemeProvider>
  );
};

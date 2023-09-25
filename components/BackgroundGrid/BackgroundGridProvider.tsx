"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

export const BackgroundGridContext = createContext<{
  setGapSize: Dispatch<SetStateAction<number>>;
  gapSize: number;
  setColumnCount: Dispatch<SetStateAction<number>>;
  columnCount: number;
  plusSize: number;
  setPlusSize: Dispatch<SetStateAction<number>>;
}>(null);

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

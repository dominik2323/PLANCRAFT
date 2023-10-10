import { Dispatch, SetStateAction } from "react";
import "styled-components";

export interface Theme {
  setGapSize: Dispatch<SetStateAction<number>>;
  gapSize: number;
  setColumnCount: Dispatch<SetStateAction<number>>;
  columnCount: number;
  plusSize: number;
  setPlusSize: Dispatch<SetStateAction<number>>;
  isLayoutReady: boolean;
  setDotSize: Dispatch<SetStateAction<number>>;
  dotSize: number;
  isLayoutVisible: boolean;
  setisLayoutVisible: Dispatch<SetStateAction<boolean>>;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

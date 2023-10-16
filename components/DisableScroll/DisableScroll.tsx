"use client";
import { createGlobalStyle } from "styled-components";

export const DisableScroll = createGlobalStyle<{ scroll: boolean }>`
  html {
    overflow: ${({ scroll }) => (scroll ? "unset" : "hidden")};;
  }
`;

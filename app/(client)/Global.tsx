"use client";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  html {
    // overrides styles of the DisableScroll component
    // otherwise it's unreliable
    overflow: auto;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: HelveticaNow, Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
  @font-face {
    font-family: 'HelveticaNow';
    src: url('../fonts/helveticaNowRegular.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;

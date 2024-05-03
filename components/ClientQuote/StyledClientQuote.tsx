"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

export const StyledClientQuote = styled.div`
  display: grid;
  row-gap: calc(2 * var(--gap-size));
  margin: calc(4 * var(--gap-size)) 0;
  margin-left: calc(0.2 * var(--gap-size) * var(--column-count));
  ${breakpoint.monitor} {
    margin: calc(5 * var(--gap-size)) 0;
    margin-left: calc(0.25 * var(--gap-size) * var(--column-count));
  }
  ${breakpoint.smallNotebook} {
    margin: calc(5 * var(--gap-size)) 0;
    margin-left: calc(0.2 * var(--gap-size) * var(--column-count));
  }
  ${breakpoint.tabletPortrait} {
    margin-left: 0;
    margin: calc(7 * var(--gap-size)) 0;
  }
  ${breakpoint.phone} {
    margin: calc(4 * var(--gap-size)) 0;
  }
`;

export const Quote = styled.blockquote`
  font-size: 80px;
  line-height: 1.2em;
  letter-spacing: -0.02em;
  color: ${colors.primary400};
  &.long-text {
    font-size: 60px;
  }
  ${breakpoint.monitor} {
    font-size: 100px;
    &.long-text {
      font-size: 80px;
    }
  }
  ${breakpoint.smallNotebook} {
    font-size: 60px;
    &.long-text {
      font-size: 40px;
    }
  }
  ${breakpoint.tabletLandscape} {
    font-size: 50px;
    &.long-text {
      font-size: 30px;
    }
  }
  ${breakpoint.phone} {
    font-size: 30px;
    &.long-text {
      font-size: 21px;
    }
  }
  ${breakpoint.smallPhone} {
    font-size: 21px;
  }
`;

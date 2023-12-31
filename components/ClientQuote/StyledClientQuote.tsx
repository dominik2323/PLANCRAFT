"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

export const StyledClientQuote = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  margin: ${({ theme }) => 4 * theme.gapSize}px 0;
  margin-left: ${({ theme }) => 0.2 * theme.columnCount * theme.gapSize}px;
  ${breakpoint.monitor} {
    margin: ${({ theme }) => 5 * theme.gapSize}px 0;
    margin-left: ${({ theme }) => 0.25 * theme.columnCount * theme.gapSize}px;
  }
  ${breakpoint.smallNotebook} {
    margin: ${({ theme }) => 5 * theme.gapSize}px 0;
    margin-left: ${({ theme }) => 0.2 * theme.columnCount * theme.gapSize}px;
  }
  ${breakpoint.tabletPortrait} {
    margin-left: 0;
    margin: ${({ theme }) => 7 * theme.gapSize}px 0;
  }
  ${breakpoint.phone} {
    margin: ${({ theme }) => 4 * theme.gapSize}px 0;
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

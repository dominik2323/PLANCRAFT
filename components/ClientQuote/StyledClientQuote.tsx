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
  font-size: 88px;
  line-height: 1.2em;
  letter-spacing: -0.02em;
  color: ${colors.primary400};
  ${breakpoint.monitor} {
    font-size: 100px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 60px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 50px;
  }
  ${breakpoint.phone} {
    font-size: 30px;
  }
  ${breakpoint.smallPhone} {
    font-size: 21px;
  }
`;

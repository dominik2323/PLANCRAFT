"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

export const StyledHomepage = styled.main`
  padding: ${({ theme }) => 1 * theme.gapSize}px;
  padding-bottom: 0;
  position: relative;
`;

export const HpHeader = styled.h1`
  font-size: 130px;
  line-height: 1.1em;
  letter-spacing: -0.02em;
  color: ${colors.primary400};
  margin-left: -0.06em;
  white-space: pre-line;
  ${breakpoint.smallNotebook} {
    font-size: 90px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 70px;
  }
  ${breakpoint.phone} {
    font-size: 35px;
  }
  ${breakpoint.smallPhone} {
    font-size: 28px;
  }
`;

export const HpHeroInner = styled.div`
  margin-left: ${({ theme }) => (theme.columnCount / 2) * theme.gapSize}px;
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    margin-left: ${({ theme }) => (theme.columnCount / 3) * theme.gapSize}px;
    row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    margin-left: ${({ theme }) => 3 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    margin-left: 0;
  }
`;

export const HpHero = styled.section`
  margin-left: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.phone} {
    margin-left: 0;
  }
`;

export const HpAbout = styled.section`
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    margin-top: ${({ theme }) => 4 * theme.gapSize}px;
  }
`;

export const HpQuoteAbout = styled.div`
  margin: ${({ theme }) => 4 * theme.gapSize}px 0;
  ${breakpoint.tabletPortrait} {
    margin: ${({ theme }) => 6 * theme.gapSize}px 0;
  }
`;

export const HpQuoteServices = styled.div`
  margin: ${({ theme }) => 4 * theme.gapSize}px 0;
  margin-left: ${({ theme }) => 0.2 * theme.gapSize * theme.columnCount}px;
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.monitor} {
    margin-left: ${({ theme }) => 0.3 * theme.gapSize * theme.columnCount}px;
  }
  ${breakpoint.tabletPortrait} {
    margin-left: 0;
    row-gap: ${({ theme }) => 3 * theme.gapSize}px;
    margin: ${({ theme }) => 5 * theme.gapSize}px 0;
  }
`;

export const HpProjectsCta = styled.div`
  display: grid;
  justify-items: start;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    margin: ${({ theme }) => 7 * theme.gapSize}px 0
      ${({ theme }) => 5 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    margin: ${({ theme }) => 5 * theme.gapSize}px 0
      ${({ theme }) => 3 * theme.gapSize}px;
  }
`;

export const HpQuoteW = styled.div`
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;

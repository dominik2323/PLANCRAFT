"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { breakpoint } from "../../consts/breakpoints";

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
`;

export const HpHeroInner = styled.div`
  margin-left: ${({ theme }) => (theme.columnCount / 2) * theme.gapSize}px;
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const HpHero = styled.section`
  margin-left: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const HpAbout = styled.section`
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const HpQuoteAbout = styled.div`
  margin: ${({ theme }) => 4 * theme.gapSize}px 0;
`;

export const HpQuoteServices = styled.div`
  margin: ${({ theme }) => 4 * theme.gapSize}px 0;
  margin-left: ${({ theme }) => 0.2 * theme.gapSize * theme.columnCount}px;
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.monitor} {
    margin-left: ${({ theme }) => 0.3 * theme.gapSize * theme.columnCount}px;
  }
`;

export const HpProjectsCta = styled.div`
  display: grid;
  justify-items: start;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
`;

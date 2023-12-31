"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledPageIntro = styled.div`
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

export const PageIntroHero = styled.section`
  display: grid;
  row-gap: ${({ theme }) => 3 * theme.gapSize}px;
  ${breakpoint.monitor} {
    row-gap: ${({ theme }) => 3 * theme.gapSize}px;
  }
  ${breakpoint.tabletPortrait} {
    row-gap: ${({ theme }) => 6 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    row-gap: ${({ theme }) => 4 * theme.gapSize}px;
  }
`;

export const PageIntroCta = styled.div`
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
`;

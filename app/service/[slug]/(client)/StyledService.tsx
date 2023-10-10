"use client";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledService = styled.main`
  padding: 0 ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.phone} {
    padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const ServicePerex = styled.div`
  max-width: ${({ theme }) => 15 * theme.gapSize}px;
  margin: ${({ theme }) => 2 * theme.gapSize}px 0
    ${({ theme }) => 4 * theme.gapSize}px ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.monitor} {
    margin: ${({ theme }) => 4 * theme.gapSize}px 0
      ${({ theme }) => 4 * theme.gapSize}px
      ${({ theme }) => 1 * theme.gapSize}px;
    max-width: ${({ theme }) => 15 * theme.gapSize}px;
  }
  ${breakpoint.tabletLandscape} {
    margin: ${({ theme }) => 5 * theme.gapSize}px 0;
  }
`;

export const ServiceNumberedList = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const SimilarProjects = styled.div`
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const ServiceAdvantages = styled.div``;

export const SimilarProjectsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

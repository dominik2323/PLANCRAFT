"use client";

import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledProject = styled.main`
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
  padding: 0 ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.phone} {
    padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const ProjectDetail = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.5 * theme.columnCount * theme.gapSize}px auto;
  grid-template-areas: "content info";
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.tabletLandscape} {
    max-width: 900px;
    grid-template-columns: unset;
    grid-template-areas: "info" "content";
    row-gap: ${({ theme }) => 3 * theme.gapSize}px;
  }
`;

export const ProjectCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProjectNavigation = styled.div`
  margin: 0 ${({ theme }) => -1 * theme.gapSize}px;
`;

export const ProjectNavigationInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

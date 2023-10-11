"use client";

import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";
import { spaces } from "../../../../consts/spaces";

export const StyledProjects = styled.main`
  padding: ${({ theme }) => 1 * theme.gapSize}px;
  padding-bottom: 0;
`;

export const ProjectsHero = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => 10 * theme.gapSize}px 1fr;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  align-items: center;
  margin-bottom: ${({ theme }) => 3 * theme.gapSize}px;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.monitor} {
    grid-template-columns: ${({ theme }) => 10 * theme.gapSize}px 1fr;
    column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: ${({ theme }) => 10 * theme.gapSize}px 1fr;
  }
  ${breakpoint.tabletLandscape} {
    margin-bottom: ${({ theme }) => 5 * theme.gapSize}px;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    row-gap: ${({ theme }) => 2 * theme.gapSize}px;
    margin-bottom: ${({ theme }) => 6 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    padding: 0;
  }
`;

export const ProjectDividerHeaderInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ theme }) => 10 * theme.gapSize}px 1fr;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.monitor} {
    grid-template-columns: ${({ theme }) => 10 * theme.gapSize}px 1fr;
    column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: ${({ theme }) => 10 * theme.gapSize}px 1fr;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: ${({ theme }) => 12 * theme.gapSize}px 1fr;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const ProjectFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  row-gap: ${spaces.xxs}px;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.monitor} {
    column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
  ${breakpoint.smallNotebook} {
    column-gap: ${({ theme }) => 0.5 * theme.gapSize}px;
  }
  ${breakpoint.tabletPortrait} {
    margin-bottom: ${({ theme }) => 1 * theme.gapSize}px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const ProjectFilter = styled(Link)`
  all: unset;
  cursor: pointer;
  &.inactive {
    opacity: 0.5;
  }
`;

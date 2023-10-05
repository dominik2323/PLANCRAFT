"use client";

import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledProjects = styled.main`
  padding: ${({ theme }) => 1 * theme.gapSize}px;
  padding-bottom: 0;
`;

export const ProjectsHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  align-items: center;
  margin-bottom: ${({ theme }) => 3 * theme.gapSize}px;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 1fr 3fr;
  }
`;

export const ProjectDividerHeaderInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 1fr 3fr;
  }
`;

export const ProjectFilters = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    gap: ${({ theme }) => 0.5 * theme.gapSize}px;
  }
`;

export const ProjectFilter = styled(Link)`
  all: unset;
  cursor: pointer;
  &.inactive {
    opacity: 0.5;
  }
`;

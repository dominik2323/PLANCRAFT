"use client";

import Link from "next/link";
import styled from "styled-components";

export const StyledProjects = styled.main`
  padding: ${({ theme }) => 1 * theme.gapSize}px;
  padding-bottom: 0;
`;

export const ProjectsHero = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.4 * theme.columnCount * theme.gapSize}px auto;
  align-items: center;
  margin-bottom: ${({ theme }) => 3 * theme.gapSize}px;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ProjectDividerHeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProjectFilters = styled.div`
  display: flex;
  gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ProjectFilter = styled(Link)`
  all: unset;
  cursor: pointer;
  &.inactive {
    opacity: 0.5;
  }
`;

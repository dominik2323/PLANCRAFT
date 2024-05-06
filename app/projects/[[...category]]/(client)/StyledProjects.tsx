"use client";

import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";
import { spaces } from "../../../../consts/spaces";

export const StyledProjects = styled.main`
  padding: calc(1 * var(--gap-size));
  padding-bottom: 0;
`;

export const ProjectsHero = styled.div`
  display: grid;
  grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  column-gap: calc(1 * var(--gap-size));
  align-items: center;
  margin-bottom: calc(3 * var(--gap-size));
  padding: 0 calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
    column-gap: calc(1 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  }
  ${breakpoint.tabletLandscape} {
    margin-bottom: calc(5 * var(--gap-size));
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    row-gap: calc(2 * var(--gap-size));
    margin-bottom: calc(6 * var(--gap-size));
  }
  ${breakpoint.phone} {
    padding: 0;
  }
`;

export const ProjectDividerHeaderInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  column-gap: calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
    column-gap: calc(1 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    grid-template-columns: calc(10 * var(--gap-size)) 1fr;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: calc(12 * var(--gap-size)) 1fr;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: calc(1 * var(--gap-size));
  }
`;

export const ProjectFilters = styled.div`
  display: flex;
  row-gap: ${spaces.xxs}px;
  column-gap: calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    column-gap: calc(1 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    column-gap: calc(0.5 * var(--gap-size));
  }
  ${breakpoint.tabletLandscape} {
    flex-wrap: wrap;
  }
  ${breakpoint.tabletPortrait} {
  }
`;

export const ProjectFilter = styled(Link)`
  all: unset;
  cursor: pointer;
  &.inactive {
    opacity: 0.5;
  }
`;

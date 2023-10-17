"use client";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const SProjectElevator = styled.div`
  height: calc(100dvh - ${({ theme }) => 2 * theme.gapSize}px);
  position: sticky;
  top: ${({ theme }) => 2 * theme.gapSize}px;
  grid-area: info;
  &.has-overflow {
    position: static;
  }
  ${breakpoint.tabletLandscape} {
    height: auto;
    position: static;
  }
`;

export const ProjectElevatorInner = styled.div``;

export const ProjectDescriptionWrapper = styled.div`
  margin: ${({ theme }) => 0.5 * theme.gapSize}px 0
    ${({ theme }) => 1.5 * theme.gapSize}px;
`;

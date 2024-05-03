"use client";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const SProjectElevator = styled.div`
  height: calc(100dvh - calc(2 * var(--gap-size)));
  position: sticky;
  top: calc(2 * var(--gap-size));
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
  margin: calc(0.5 * var(--gap-size)) 0 calc(1.5 * var(--gap-size));
`;

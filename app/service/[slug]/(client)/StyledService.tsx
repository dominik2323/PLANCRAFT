"use client";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledService = styled.main`
  padding: 0 calc(1 * var(--gap-size));
  ${breakpoint.phone} {
    padding: 0 calc(1 * var(--gap-size));
  }
`;

export const ServicePerex = styled.div`
  max-width: calc(15 * var(--gap-size));
  margin: calc(2 * var(--gap-size)) 0 calc(4 * var(--gap-size))
    calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    margin: calc(1 * var(--gap-size)) 0 calc(5 * var(--gap-size))
      calc(1 * var(--gap-size));
    max-width: calc(15 * var(--gap-size));
  }
  ${breakpoint.tabletLandscape} {
    margin: calc(3 * var(--gap-size)) 0;
  }
  ${breakpoint.tabletPortrait} {
    margin: calc(7 * var(--gap-size)) 0 calc(5 * var(--gap-size));
    max-width: calc(18 * var(--gap-size));
  }
  ${breakpoint.phone} {
    margin: calc(4 * var(--gap-size)) 0 calc(2 * var(--gap-size));
  }
`;

export const ServiceNumberedList = styled.div`
  display: grid;
  row-gap: calc(1 * var(--gap-size));
  margin-bottom: calc(1 * var(--gap-size));
  ${breakpoint.monitor} {
    margin-bottom: calc(2 * var(--gap-size));
  }
`;

export const SimilarProjects = styled.div`
  margin-top: calc(2 * var(--gap-size));
`;

export const ServiceAdvantages = styled.div``;

export const SimilarProjectsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: calc(1 * var(--gap-size));
`;

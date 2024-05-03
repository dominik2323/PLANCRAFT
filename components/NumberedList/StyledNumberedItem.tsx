"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledNumberedItem = styled.div`
  display: grid;
  grid-template-columns: calc(1 * var(--gap-size)) auto;
  grid-template-areas: "index header" ". perex";
  row-gap: calc(0.5 * var(--gap-size));
  column-gap: calc(0.5 * var(--gap-size));
  align-content: start;
  ${breakpoint.tabletPortrait} {
    grid-template-areas: "index" "header" "perex";
    grid-template-columns: unset;
  }
`;

export const NumItemHeader = styled.div`
  grid-area: header;
`;

export const NumItemIndex = styled.div`
  grid-area: index;
`;

export const NumItemPerex = styled.div`
  grid-area: perex;
`;

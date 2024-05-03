"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledNumberedList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: calc(2 * var(--gap-size));
  row-gap: calc(2 * var(--gap-size));
  padding: 0 calc(1 * var(--gap-size));
  ${breakpoint.smallNotebook} {
    column-gap: calc(1 * var(--gap-size));
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: calc(2 * var(--gap-size));
    padding: 0;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
  }
`;

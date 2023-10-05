"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledNumberedList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

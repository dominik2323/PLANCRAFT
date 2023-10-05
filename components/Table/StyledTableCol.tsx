"use client";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import { breakpoint } from "../../consts/breakpoints";

export const StyledTableCol = styled.td`
  padding: ${spaces.xs}px 0;
  min-width: 200px;
  &:nth-child(odd) {
    vertical-align: top;
  }
  &:nth-child(even) {
    padding-left: ${({ theme }) => 1 * theme.gapSize}px;
  }
  ${breakpoint.smallNotebook} {
    min-width: 100px;
  }
`;

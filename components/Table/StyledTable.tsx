"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableRow = styled.tr`
  &:first-child {
    border-top: var(--dot-size) solid ${colors.primary400};
  }
  border-bottom: var(--dot-size) solid ${colors.primary400};
`;

export const StyledTableCol = styled.td`
  padding: ${spaces.xs}px 0;
  min-width: 200px;
  &:nth-child(odd) {
    vertical-align: top;
  }
  &:nth-child(even) {
    padding-left: calc(1 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    min-width: 150px;
  }
`;

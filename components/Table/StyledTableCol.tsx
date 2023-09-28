"use client";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";

export const StyledTableCol = styled.td`
  padding: ${spaces.xs}px 0;
  min-width: 200px;
  &:nth-child(even) {
    padding-left: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

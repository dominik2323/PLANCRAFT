"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const StyledTableCol = styled.td`
  padding: ${spaces.xs}px 0;
  &:nth-child(even) {
    padding-left: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledTableRow = styled.tr`
  &:first-child {
    border-top: ${({ theme }) => theme.dotSize}px solid ${colors.primary400};
  }
  border-bottom: ${({ theme }) => theme.dotSize}px solid ${colors.primary400};
`;

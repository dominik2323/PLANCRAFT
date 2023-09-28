"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledTableRow = styled.tr`
  &:first-child {
    border-top: 1px solid ${colors.primary400};
  }
  border-bottom: 1px solid ${colors.primary400};
`;

"use client";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import { colors } from "../../consts/colors";
import Link from "next/link";
import { breakpoint } from "../../consts/breakpoints";

export const ButtonLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => 0.25 * theme.gapSize}px;
  font-size: 20px;
  color: ${colors.primary400};
  column-gap: ${spaces.s}px;
  height: ${({ theme }) => 1 * theme.gapSize + theme.plusSize}px;
  width: ${({ theme }) => 5 * theme.gapSize}px;
  text-transform: uppercase;
  &.skinny {
    width: ${({ theme }) => 3 * theme.gapSize}px;
  }
`;

export const Cap = styled.div`
  width: 100%;
`;

export const ButtonInner = styled.div`
  width: 100%;
  text-align: center;
  ${breakpoint.smallNotebook} {
    font-size: 14px;
  }
`;

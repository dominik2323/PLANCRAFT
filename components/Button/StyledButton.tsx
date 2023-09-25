"use client";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import { colors } from "../../consts/colors";

export const StyledButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${colors.primary400};
  column-gap: ${spaces.s}px;
  height: ${({ theme }) => 1 * theme.gapSize + theme.plusSize}px;
  width: ${({ theme }) => 5 * theme.gapSize}px;
  text-transform: uppercase;
`;

export const Cap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &.left {
    margin-left: ${({ theme }) => -1 * theme.plusSize * 0.5}px;
  }
  &.right {
    margin-right: ${({ theme }) => -1 * theme.plusSize * 0.5}px;
  }
`;

export const ButtonInner = styled.div`
  width: 100%;
  text-align: center;
`;
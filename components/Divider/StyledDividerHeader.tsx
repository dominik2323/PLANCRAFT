"use client";
import styled from "styled-components";

export const StyledDividerHeader = styled.div`
  height: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const StyledDividerHeaderInner = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => 1 * theme.gapSize}px;
  padding-right: ${({ theme }) => 1 * theme.gapSize}px;
  height: 100%;
`;

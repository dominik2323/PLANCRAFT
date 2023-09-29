"use client";
import styled from "styled-components";

export const StyledDividerHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => 1 * theme.gapSize}px 0;
  &.flip {
    flex-direction: column-reverse;
  }
  &.big {
    /* padding-top: ${({ theme }) => 1 * theme.gapSize}px;
    padding-bottom: 0; */
  }
`;

export const StyledDividerHeaderInner = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => 1 * theme.gapSize}px;
  padding-right: ${({ theme }) => 1 * theme.gapSize}px;
  height: 100%;
  padding-bottom: ${({ theme }) => 1 * theme.gapSize}px;
  padding-top: 0;
  &.flip {
    padding-top: ${({ theme }) => 1 * theme.gapSize}px;
    padding-bottom: 0;
  }
`;

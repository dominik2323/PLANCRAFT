"use client";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledDividerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => 1 * theme.gapSize}px 0;
  &.flip {
    flex-direction: column-reverse;
  }
  &.no-padding {
    padding: 0;
  }
`;

export const StyledDividerHeaderInner = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => 1 * theme.gapSize}px;
  padding-right: ${({ theme }) => 1 * theme.gapSize}px;
  height: ${({ theme }) => 2 * theme.gapSize}px;
  padding-top: 0;
  ${breakpoint.tabletPortrait} {
    min-height: ${({ theme }) => 2 * theme.gapSize}px;
    height: auto;
  }
  ${breakpoint.phone} {
    min-height: ${({ theme }) => 4 * theme.gapSize}px;
    height: auto;
    padding: 0;
  }
`;

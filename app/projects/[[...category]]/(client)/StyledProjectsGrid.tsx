"use client";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";

export const StyledProjectsGrid = styled.div`
  display: grid;
`;

export const ProjectCardW = styled.div`
  height: ${({ theme }) => 10 * theme.gapSize}px;
  padding-left: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    height: ${({ theme }) => 15 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    height: auto;
    padding: ${({ theme }) => 1 * theme.gapSize}px 0;
  }
`;

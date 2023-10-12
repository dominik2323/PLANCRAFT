"use client";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledFigureBanner = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => 23 * theme.gapSize}px auto;
  grid-template-areas: "cover content";
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  align-items: end;
  justify-items: start;
  &.flip {
    grid-template-areas: "content cover";
    grid-template-columns: auto ${({ theme }) => 23 * theme.gapSize}px;
  }
  &.align-top {
    align-items: start;
  }
  &.align-center {
    align-items: center;
  }
  ${breakpoint.monitor} {
    grid-template-columns: ${({ theme }) => 23 * theme.gapSize}px auto;
    &.flip {
      grid-template-columns: auto ${({ theme }) => 23 * theme.gapSize}px;
    }
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-template-areas: "cover" "content";
    row-gap: ${({ theme }) => 3 * theme.gapSize}px;
    &.flip {
      grid-template-columns: unset;
      grid-template-areas: "cover" "content";
    }
  }
`;

export const FigureBannerCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const FigureBannerContent = styled.div`
  display: grid;
  justify-items: start;
  grid-area: content;
`;

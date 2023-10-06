"use client";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledScrollFigureBanner = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.55 * theme.columnCount * theme.gapSize}px auto;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  align-items: center;
  height: 100%;
  ${breakpoint.tabletPortrait} {
    height: auto;
    margin: ${({ theme }) => 6 * theme.gapSize}px 0;
    grid-template-columns: unset;
    row-gap: ${({ theme }) => 3 * theme.gapSize}px;
  }
`;

export const ScrollFigureBannerCover = styled(Image)`
  width: 100%;
  height: 60%;
  object-fit: cover;
  aspect-ratio: 1.7;
  ${breakpoint.tabletPortrait} {
    height: auto;
  }
`;

export const ScrollFigureBannerContent = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

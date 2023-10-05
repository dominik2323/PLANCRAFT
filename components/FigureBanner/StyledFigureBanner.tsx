"use client";
import Image from "next/image";
import styled from "styled-components";

export const StyledFigureBanner = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.55 * theme.gapSize * theme.columnCount}px auto;
  grid-template-areas: "cover content";
  column-gap: ${({ theme }) => 3 * theme.gapSize}px;
  align-items: end;
  justify-items: start;
  &.flip {
    grid-template-areas: "content cover";
    grid-template-columns: auto ${({ theme }) =>
        0.55 * theme.gapSize * theme.columnCount}px;
  }
  &.align-top {
    align-items: start;
  }
  &.align-center {
    align-items: center;
  }
`;

export const FigureBannerCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  grid-area: cover;
`;

export const FigureBannerContent = styled.div`
  grid-area: content;
  display: grid;
  justify-items: start;
`;

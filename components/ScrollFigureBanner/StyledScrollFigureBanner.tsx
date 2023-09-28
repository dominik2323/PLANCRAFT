"use client";
import Image from "next/image";
import styled from "styled-components";

export const StyledScrollFigureBanner = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.7 * theme.columnCount * theme.gapSize}px auto;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  align-items: center;
  height: 100%;
`;

export const ScrollFigureBannerCover = styled(Image)`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1.7;
`;

export const ScrollFigureBannerContent = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;
"use client";
import Image from "next/image";
import styled from "styled-components";

export const StyledFigureBanner = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.7 * theme.gapSize * theme.columnCount}px auto;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  align-items: end;
`;

export const FigureBannerCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const FigureBannerContent = styled.div``;

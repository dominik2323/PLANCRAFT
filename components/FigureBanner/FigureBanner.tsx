"use client";

import React, { ReactNode } from "react";
import {
  FigureBannerContent,
  FigureBannerCover,
  StyledFigureBanner,
} from "./StyledFigureBanner";

interface FigureBannerProps {
  children: ReactNode;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const FigureBanner = ({
  children,
  src,
  alt,
  width,
  height,
}: FigureBannerProps) => {
  return (
    <StyledFigureBanner>
      <FigureBannerCover src={src} alt={alt} width={width} height={height} />
      <FigureBannerContent>{children}</FigureBannerContent>
    </StyledFigureBanner>
  );
};

export default FigureBanner;

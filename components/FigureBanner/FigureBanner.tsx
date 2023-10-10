"use client";

import { ReactNode } from "react";
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
  className?: string;
}

const FigureBanner = ({
  children,
  src,
  alt,
  width,
  height,
  className,
}: FigureBannerProps) => {
  return (
    <StyledFigureBanner className={className}>
      <FigureBannerCover src={src} alt={alt} width={width} height={height} />
      <FigureBannerContent>{children}</FigureBannerContent>
    </StyledFigureBanner>
  );
};

export default FigureBanner;

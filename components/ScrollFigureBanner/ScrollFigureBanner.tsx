"use client";

import React, { ReactNode } from "react";
import {
  ScrollFigureBannerContent,
  ScrollFigureBannerCover,
  StyledScrollFigureBanner,
} from "./StyledScrollFigureBanner";
import Elevator from "../Elevator/Elevator";
import { Mini } from "../Typography/Mini";
import { useWindowSize } from "../../hooks/useWindowSize";
import { device } from "../../consts/breakpoints";

interface ScrollFigureBannerProps {
  items: string[];
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ScrollFigureBanner = ({
  items,
  src,
  alt,
  width,
  height,
  className,
}: ScrollFigureBannerProps) => {
  const { w } = useWindowSize();
  return (
    <Elevator scrollHeight='200vh' disable={w <= device.tabletPortrait}>
      {(args) => {
        const progress = args?.progress || 1;
        return (
          <StyledScrollFigureBanner>
            {/* TODO Add animation to the photos */}
            <ScrollFigureBannerCover
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
            <ScrollFigureBannerContent>
              {items.map((item, i) => (
                <Mini
                  key={i}
                  style={{
                    opacity: Math.max(items.length * progress - i, 0.2),
                  }}>
                  {item}
                </Mini>
              ))}
            </ScrollFigureBannerContent>
          </StyledScrollFigureBanner>
        );
      }}
    </Elevator>
  );
};

export default ScrollFigureBanner;

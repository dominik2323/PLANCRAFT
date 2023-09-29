"use client";

import React, { ReactNode } from "react";
import {
  ScrollFigureBannerContent,
  ScrollFigureBannerCover,
  StyledScrollFigureBanner,
} from "./StyledScrollFigureBanner";
import Elevator from "../Elevator/Elevator";
import { Mini } from "../Typography/Mini";

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
  return (
    <Elevator scrollHeight='200vh'>
      {({ progress }) => (
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
      )}
    </Elevator>
  );
};

export default ScrollFigureBanner;

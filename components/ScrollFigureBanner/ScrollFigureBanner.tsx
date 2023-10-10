"use client";

import { ImageProps } from "../../app/service/[slug]/servicesData";
import { easingInOut } from "../../consts/animationConfig";
import { device } from "../../consts/breakpoints";
import { useWindowSize } from "../../hooks/useWindowSize";
import Elevator from "../Elevator/Elevator";
import { Mini } from "../Typography/Mini";
import {
  ScrollFigureBannerContent,
  ScrollFigureBannerCover,
  ScrollFigureBannerCoverW,
  ScrollFigureBannerCoverWI,
  StyledScrollFigureBanner,
} from "./StyledScrollFigureBanner";

interface ScrollFigureBannerProps {
  items: { perex: string; image: ImageProps }[];
}

const ScrollFigureBanner = ({ items }: ScrollFigureBannerProps) => {
  const { w } = useWindowSize();
  return (
    <Elevator scrollHeight='200vh' disable={w <= device.tabletPortrait}>
      {(args) => {
        const progress = args?.progress || 0;
        return (
          <StyledScrollFigureBanner>
            <ScrollFigureBannerCoverW>
              {items.map(({ image }, i) => {
                const isActive = i / items.length <= progress;
                return (
                  <ScrollFigureBannerCoverWI
                    key={i}
                    animate={{
                      y: isActive
                        ? `${(i / items.length) * 10 + -50}%`
                        : "-300%",
                      x: isActive ? `${(i / items.length) * -5}%` : `-100%`,
                      skewX: isActive ? "0deg" : "10deg",
                    }}
                    transition={{ ease: easingInOut, duration: 1 }}>
                    <ScrollFigureBannerCover
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                    />
                  </ScrollFigureBannerCoverWI>
                );
              })}
            </ScrollFigureBannerCoverW>
            <ScrollFigureBannerContent>
              {items.map((item, i) => (
                <Mini
                  key={i}
                  style={{
                    opacity: Math.max(items.length * progress - i, 0.2),
                  }}>
                  {item.perex}
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

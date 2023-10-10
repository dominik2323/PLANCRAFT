"use client";

import { ImageProps } from "../../app/service/[slug]/servicesData";
import {
  easingInOutCubic,
  easingInOutCubicFn,
} from "../../consts/animationConfig";
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
  const _progress = (i: number, progress: number, min: number) => {
    if (i === 0) return 1;
    return easingInOutCubicFn(Math.max(items.length * progress - i, min));
  };
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
                    style={{ opacity: _progress(i, progress, 0) }}
                    transition={{ ease: easingInOutCubic, duration: 2 }}>
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
                    opacity: _progress(i, progress, 0.4),
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

"use client";

import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { easing } from "../../consts/animationConfig";
import {
  RevealAnimationInner,
  StyledRevealAnimation,
} from "./Styles/StyledRevealAnimation";

interface TextAnimationProps {
  children: ReactNode;
  delay?: number;
  noSkew?: boolean;
  noCrop?: boolean;
  duration?: number;
  disable?: boolean;
  y?: (number | string)[];
}

const RevealAnimation = ({
  children,
  delay = 0,
  noSkew = true,
  duration = 1.2,
  noCrop = false,
  disable,
  y,
}: TextAnimationProps) => {
  const { isLayoutVisible } = useTheme();
  if (!isLayoutVisible) return;
  return disable ? (
    <div>{children}</div>
  ) : (
    <StyledRevealAnimation style={{ overflow: noCrop ? "unset" : "hidden" }}>
      <RevealAnimationInner
        initial={{ y: y ? y[0] : "70%", skew: noSkew ? 0 : 20, opacity: 0 }}
        whileInView={{ y: y ? y[1] : "0%", skew: 0, opacity: 1 }}
        transition={{ delay: 0.5 * delay, ease: easing, duration: duration }}
        viewport={{
          once: true,
          margin: "0% 0%",
        }}>
        {children}
      </RevealAnimationInner>
    </StyledRevealAnimation>
  );
};

export default RevealAnimation;

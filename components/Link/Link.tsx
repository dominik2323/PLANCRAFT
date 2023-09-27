"use client";

import React, { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { StyledLink } from "./Styles/StyledLink";
import Arrow from "../Svgs/Arrow";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  as?: keyof JSX.IntrinsicElements;
  noArrow?: boolean;
}

const Link = ({
  children,
  target,
  className,
  as,
  noArrow,
  ...rest
}: LinkProps) => {
  if (as) {
    return (
      <StyledLink as={as} className={className} target={target}>
        {children}
        {!noArrow && <Arrow />}
      </StyledLink>
    );
  }
  return (
    <NextLink {...rest} passHref legacyBehavior>
      <StyledLink className={className} target={target}>
        {children}
        {!noArrow && <Arrow />}
      </StyledLink>
    </NextLink>
  );
};

export default Link;

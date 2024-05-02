"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React, { ReactNode, useState } from "react";
import Arrow from "../Svgs/Arrow";
import { StyledLink } from "./Styles/StyledLink";

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
  const [hover, sethover] = useState<boolean>(false);

  if (as) {
    return (
      <StyledLink
        as={as}
        className={className}
        target={target}
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
      >
        {children}
        {!noArrow && <Arrow animate={hover} />}
      </StyledLink>
    );
  }
  return (
    <NextLink {...rest} passHref legacyBehavior>
      <StyledLink
        className={className}
        target={target}
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
      >
        {children}
        {!noArrow && <Arrow animate={hover} />}
      </StyledLink>
    </NextLink>
  );
};

export default Link;

"use client";

import React, { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { StyledLink } from "./Styles/StyledLink";
import Arrow from "../Svgs/Arrow";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Link = ({ children, target, className, ...rest }: LinkProps) => {
  return (
    <NextLink {...rest} passHref legacyBehavior>
      <StyledLink className={className} target={target}>
        {children}
        <Arrow />
      </StyledLink>
    </NextLink>
  );
};

export default Link;

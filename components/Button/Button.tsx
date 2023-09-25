"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import Plus from "../Svgs/Plus";
import { StyledButton, Cap, ButtonInner } from "./StyledButton";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  as?: keyof JSX.IntrinsicElements;
}

const Button = ({
  children,
  className,
  onClick,
  href,
  type,
  as,
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={className}>
        <StyledButton as={"span"} className={className} onClick={onClick}>
          <Cap className='left'>
            <Plus />
            <Plus />
          </Cap>
          <ButtonInner>{children}</ButtonInner>
          <Cap className='right'>
            <Plus />
            <Plus />
          </Cap>
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton className={className} onClick={onClick} type={type} as={as}>
      <Cap className='left'>
        <Plus />
        <Plus />
      </Cap>
      <ButtonInner>{children}</ButtonInner>
      <Cap className='right'>
        <Plus />
        <Plus />
      </Cap>
    </StyledButton>
  );
};

export default Button;

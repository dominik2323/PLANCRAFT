"use client";

import React from "react";
import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";

interface ArrowProps {
  stroke?: ColorKeys;
  strokeWidth?: number;
}

const StyledArrow = styled.svg``;

const Arrow = ({ stroke = "primary400", strokeWidth = 1 }: ArrowProps) => {
  return (
    <StyledArrow
      width='12'
      height='23'
      viewBox='0 0 12 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0.509277 1L11.0186 11.6066L0.509277 22.2132'
        strokeWidth={strokeWidth}
        stroke={colors[stroke]}
      />
    </StyledArrow>
  );
};

export default Arrow;

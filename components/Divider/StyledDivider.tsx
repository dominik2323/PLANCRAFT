"use client";

import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";
import { motion } from "framer-motion";

export const StyledDivider = styled(motion.div)`
  display: flex;
  align-items: center;
  width: calc(100% + ${({ theme }) => theme.plusSize}px);
  transform: translateX(${({ theme }) => -0.5 * theme.plusSize}px);
  position: relative;
  &.hide-plus {
    width: 100%;
    transform: translateX(0);
  }
`;

export const PlusWrapper = styled.div`
  position: absolute;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;

export const DividerLine = styled(motion.div)<{ color: ColorKeys }>`
  width: 100%;
  height: ${({ theme }) => theme.dotSize}px;
  background-color: ${({ color }) => colors[color]};
  transform-origin: 0 0;
  &.reverse {
    transform-origin: 100% 0;
  }
`;

"use client";

import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";
import { motion } from "framer-motion";

export const StyledDivider = styled(motion.div)`
  display: flex;
  align-items: center;
  width: calc(100% + var(--plus-size));
  transform: translateX(calc(-0.5 * var(--plus-size)));
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
  height: var(--dot-size);
  background-color: ${({ color }) => colors[color]};
  transform-origin: 0 0;
  &.reverse {
    transform-origin: 100% 0;
  }
`;

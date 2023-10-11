"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const StyledLoader = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: ${colors.primary400};
  padding: ${spaces.xxl}px;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  ${breakpoint.phone} {
    padding: ${spaces.l}px;
  }
`;

export const LoaderInner = styled.div`
  width: 100%;
  display: grid;
  row-gap: ${spaces.xxxxl}px;
  ${breakpoint.phone} {
    row-gap: ${spaces.xxl}px;
  }
`;

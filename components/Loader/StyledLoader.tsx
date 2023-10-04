"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { motion } from "framer-motion";
import { spaces } from "../../consts/spaces";

export const StyledLoader = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: ${colors.primary400};
  padding: ${spaces.xxl}px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LoaderInner = styled.div`
  column-gap: ${spaces.xl}px;
  width: 100%;
  display: grid;
  row-gap: ${spaces.xxxxl}px;
`;

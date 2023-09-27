"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { motion } from "framer-motion";

export const StyledLoader = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: ${colors.primary400};
`;

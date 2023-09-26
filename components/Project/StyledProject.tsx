"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const StyledProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  /* align-content: start; */
`;

export const ProjectCardImage = styled(Image)`
  height: 100%;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  display: none;
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

export const ProjectCardContent = styled.div`
  padding: ${({ theme }) => 1 * theme.gapSize}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ProjectCardContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectCardContentFooter = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

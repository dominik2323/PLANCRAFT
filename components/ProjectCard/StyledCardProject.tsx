"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledProjectCard = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

export const ProjectCardImage = styled(Image)`
  height: 100%;
  width: auto;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const ProjectCardImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  position: relative;
  padding: ${({ theme }) => 0.5 * theme.gapSize}px 0;
`;

export const ProjectCardContent = styled.div`
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => 0.5 * theme.gapSize}px 0;
`;

export const ProjectCardContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProjectCardContentFooter = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

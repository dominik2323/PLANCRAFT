"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import { breakpoint } from "../../consts/breakpoints";

export const StyledProjectCard = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  height: 100%;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 1fr 3fr;
    column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: 1fr 2fr;
  }
`;

export const ProjectCardZoomW = styled.div`
  ${breakpoint.tabletPortrait} {
    height: 30vh;
  }
`;

export const ProjectCardImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: 0 0;
  ${breakpoint.tabletPortrait} {
    object-fit: cover;
  }
`;

export const ProjectCardImageMask = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
`;

export const ProjectCardImageInner = styled.div`
  position: absolute;
  padding: ${({ theme }) => 0.5 * theme.gapSize}px 0;
  inset: 0;
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
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
`;

export const ProjectCardServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${spaces.xxs}px;
  ${breakpoint.tabletPortrait} {
    column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const ProjectCardContentFooter = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  ${breakpoint.tabletPortrait} {
    column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
`;

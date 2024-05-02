"use client";

import { motion } from "framer-motion";
import Image from "../../components/Image/Image";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const StyledProjectCard = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const ProjectCardInner = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => 9 * theme.gapSize}px 1fr;
  column-gap: ${({ theme }) => 3 * theme.gapSize}px;
  padding: ${spaces.m}px 0;
  height: 100%;
  ${breakpoint.smallNotebook} {
    grid-template-columns: ${({ theme }) => 10 * theme.gapSize}px 1fr;
    column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: 1fr 2fr;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
  }
`;

export const ProjectCardZoomW = styled.div`
  height: 100%;
  ${breakpoint.tabletPortrait} {
    height: 30vh;
  }
  ${breakpoint.phone} {
    height: 100%;
  }
`;

export const ProjectCardImage = styled(Image)`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: 0 0;
`;

export const ProjectCardImageMask = styled.div`
  aspect-ratio: 1;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
`;

export const ProjectCardImageAnimationW = styled.div`
  aspect-ratio: 1;
  height: fit-content;
  max-width: 100%;
  overflow: hidden;
`;

export const ProjectCardImageAnimation = styled(motion.div)`
  transform-origin: 50% 50%;
  max-height: 100%;
  max-width: 100%;
`;

export const ProjectCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  ${breakpoint.phone} {
    padding: ${spaces.s}px 0;
  }
`;

export const ProjectCardContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.tabletLandscape} {
    row-gap: ${({ theme }) => 1 * theme.gapSize}px;
    flex-direction: column;
    align-items: flex-start;
  }
  ${breakpoint.phone} {
    margin-bottom: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const ProjectCardServices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${spaces.xxs}px;
  ${breakpoint.tabletLandscape} {
    align-items: flex-start;
  }
  ${breakpoint.tabletPortrait} {
    column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    display: none;
  }
`;

export const ProjectCardContentFooter = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  ${breakpoint.tabletPortrait} {
    column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    flex-direction: column;
    row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
`;

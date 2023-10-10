"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const StyledProjectCard = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  height: 100%;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 1fr 3fr;
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
  height: 100%;
  width: auto;
  object-fit: contain;
  object-position: center;
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
  ${breakpoint.phone} {
    position: static;
    width: 100%;
  }
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
  ${breakpoint.phone} {
    margin-bottom: ${({ theme }) => 1 * theme.gapSize}px;
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
    row-gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

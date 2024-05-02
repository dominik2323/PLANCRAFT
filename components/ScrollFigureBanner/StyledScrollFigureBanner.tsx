"use client";
import { motion } from "framer-motion";
import Image from "../Image/Image";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledScrollFigureBanner = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.55 * theme.columnCount * theme.gapSize}px auto;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  align-items: center;
  height: 100%;
  overflow-y: hidden;
  ${breakpoint.tabletPortrait} {
    height: auto;
    margin: ${({ theme }) => 6 * theme.gapSize}px 0;
    grid-template-columns: unset;
    row-gap: ${({ theme }) => 3 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    margin: ${({ theme }) => 5 * theme.gapSize}px 0
      ${({ theme }) => 2 * theme.gapSize}px;
  }
`;

export const ScrollFigureBannerContent = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ScrollFigureBannerCoverW = styled.div`
  height: 100%;
  position: relative;
  ${breakpoint.phone} {
    height: auto;
  }
`;

export const ScrollFigureBannerCoverWI = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${breakpoint.tabletPortrait} {
    position: static;
    height: auto;
    display: none;
    transform: none;
    &:first-child {
      display: block;
    }
  }
`;

export const ScrollFigureBannerCover = styled(Image)`
  width: 100%;
  height: 60%;
  object-fit: cover;
  aspect-ratio: 1.7;
  ${breakpoint.tabletPortrait} {
    height: auto;
  }
  ${breakpoint.phone} {
    height: auto;
  }
`;

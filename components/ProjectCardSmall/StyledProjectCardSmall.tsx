"use client";
import Image from "../Image/Image";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledProjectCardSmall = styled(Link)`
  all: unset;
  cursor: pointer;
  width: 100%;
  display: grid;
  row-gap: ${({ theme }) => 0.5 * theme.gapSize}px;
`;

export const ProjectCardSmallCover = styled(Image)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: contain;
`;

export const ProjectsCardsSmallWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  justify-items: start;
  align-items: start;
  &:nth-child(n + 5) {
    display: none;
  }
  ${breakpoint.monitor} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    :nth-child(n + 3) {
      display: none;
    }
  }
`;

"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledProjectCardSmall = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  row-gap: ${({ theme }) => 0.5 * theme.gapSize}px;
`;

export const ProjectCardSmallCover = styled(Image)`
  width: auto;
  height: 100%;
  object-fit: cover;
`;

export const ProjectsCardsSmallWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

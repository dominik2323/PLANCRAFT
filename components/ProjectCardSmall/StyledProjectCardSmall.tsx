"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledProjectCardSmall = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const ProjectCardSmallCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: ${({ theme }) => 1 * theme.gapSize}px;
`;

"use client";
import styled from "styled-components";
import Image from "next/image";

export const StyledProjectContent = styled.div`
  grid-area: content;
`;

export const ProjectBodyImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectBodyImageRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  margin: ${({ theme }) => 2 * theme.gapSize}px 0;
  &:first-child {
    margin-top: 0;
  }
`;

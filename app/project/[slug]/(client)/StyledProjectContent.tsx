"use client";
import styled from "styled-components";
import Image from "next/image";

export const StyledProjectContent = styled.div``;
export const ProjectBodyImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProjectBodyImageRow = styled.div`
  display: flex;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  margin: ${({ theme }) => 2 * theme.gapSize}px 0;
  &:first-child {
    margin-top: 0;
  }
`;

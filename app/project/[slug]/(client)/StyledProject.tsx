"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledProject = styled.main`
  padding: 0 ${({ theme }) => 2 * theme.gapSize}px;
`;

export const ProjectDetail = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.5 * theme.columnCount * theme.gapSize}px auto;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ProjectContent = styled.div``;

export const ProjectElevator = styled.div`
  height: 100dvh;
  position: sticky;
  top: 0;
`;

export const ProjectDescriptionWrapper = styled.div`
  margin: ${({ theme }) => 0.5 * theme.gapSize}px 0
    ${({ theme }) => 1.5 * theme.gapSize}px;
`;

export const ProjectCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProjectBodyImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ProjectBodyImageRow = styled.div`
  display: flex;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  margin: ${({ theme }) => 1 * theme.gapSize}px 0;
  &:first-child {
    margin-top: 0;
  }
`;

export const ProjectNavigation = styled.div``;

export const ProjectNavigationInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

"use client";
import styled from "styled-components";

export const StyledService = styled.main`
  padding: 0 ${({ theme }) => 2 * theme.gapSize}px;
`;

export const SimilarProjects = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const SimilarProjectsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

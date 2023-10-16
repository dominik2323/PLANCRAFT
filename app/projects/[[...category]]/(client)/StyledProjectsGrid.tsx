"use client";
import styled from "styled-components";

export const StyledProjectsGrid = styled.div`
  display: grid;
`;

export const ProjectCardW = styled.div`
  height: fit-content;
`;

export const LoadMoreW = styled.div`
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
`;

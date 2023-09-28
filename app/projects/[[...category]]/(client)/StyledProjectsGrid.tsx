"use client";
import styled from "styled-components";

export const StyledProjectsGrid = styled.div`
  display: grid;
`;

export const ProjectCardWrapper = styled.div`
  height: ${({ theme }) => 10 * theme.gapSize}px;
  padding-left: ${({ theme }) => 1 * theme.gapSize}px;
`;

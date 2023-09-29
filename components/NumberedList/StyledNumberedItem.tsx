"use client";
import styled from "styled-components";

export const StyledNumberedItem = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => 1 * theme.gapSize}px auto;
  grid-template-areas: "index header" ". perex";
  row-gap: ${({ theme }) => 0.5 * theme.gapSize}px;
  column-gap: ${({ theme }) => 0.5 * theme.gapSize}px;
  align-content: start;
`;

export const NumItemHeader = styled.div`
  grid-area: header;
`;

export const NumItemIndex = styled.div`
  grid-area: index;
`;

export const NumItemPerex = styled.div`
  grid-area: perex;
`;

"use client";
import styled from "styled-components";

export const StyledNumberedList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

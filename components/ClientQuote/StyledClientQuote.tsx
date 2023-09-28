"use client";
import styled from "styled-components";

export const StyledClientQuote = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  margin: ${({ theme }) => 4 * theme.gapSize}px 0;
  margin-left: ${({ theme }) => 0.2 * theme.columnCount * theme.gapSize}px;
`;

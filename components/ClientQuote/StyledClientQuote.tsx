"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledClientQuote = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  margin: ${({ theme }) => 4 * theme.gapSize}px 0;
  margin-left: ${({ theme }) => 0.2 * theme.columnCount * theme.gapSize}px;
`;

export const Quote = styled.blockquote`
  font-size: 88px;
  line-height: 1.2em;
  letter-spacing: -0.02em;
  color: ${colors.primary400};
`;

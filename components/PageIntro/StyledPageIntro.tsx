"use client";
import styled from "styled-components";

export const StyledPageIntro = styled.div``;

export const PageIntroHero = styled.section`
  display: grid;
  margin-top: ${({ theme }) => 2 * theme.gapSize}px;
  row-gap: ${({ theme }) => 3 * theme.gapSize}px;
`;

export const PageIntroCta = styled.div`
  margin-top: ${({ theme }) => 5 * theme.gapSize}px;
`;

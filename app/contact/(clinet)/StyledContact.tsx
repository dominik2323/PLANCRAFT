"use client";
import Image from "next/image";
import styled from "styled-components";

export const StyledContact = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${({ theme }) => 5 * theme.gapSize}px);
  width: 100vw;
  justify-content: space-between;
  position: absolute;
  inset: 0;
  top: ${({ theme }) => 5 * theme.gapSize}px;
`;

export const ContactHero = styled.div`
  display: grid;
  padding: 0 ${({ theme }) => 2 * theme.gapSize}px;
  grid-template-columns: ${({ theme }) =>
      0.4 * theme.columnCount * theme.gapSize}px auto;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContactCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

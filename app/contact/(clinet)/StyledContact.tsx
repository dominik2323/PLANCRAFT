"use client";
import Image from "next/image";
import styled from "styled-components";

export const StyledContact = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding-top: ${({ theme }) => 6 * theme.gapSize}px;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
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
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const ContactCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

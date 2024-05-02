"use client";
import Image from "../../../components/Image/Image";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledContact = styled.main`
  width: 100vw;
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
  grid-template-areas: "content cover";
  grid-template-columns: ${({ theme }) =>
      0.4 * theme.columnCount * theme.gapSize}px auto;
  column-gap: ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-template-areas: "cover" "content";
    row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  grid-area: content;
`;

export const ContactCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: cover;
`;

"use client";
import Image from "next/image";
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
  padding-top: calc(6 * var(--gap-size));
  row-gap: calc(2 * var(--gap-size));
`;

export const ContactHero = styled.div`
  display: grid;
  padding: 0 calc(2 * var(--gap-size));
  grid-template-areas: "content cover";
  grid-template-columns: ${({ theme }) =>
      0.4 * theme.columnCount * theme.gapSize}px auto;
  column-gap: calc(1 * var(--gap-size));
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-template-areas: "cover" "content";
    row-gap: calc(2 * var(--gap-size));
  }
  ${breakpoint.phone} {
    padding: 0 calc(1 * var(--gap-size));
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: calc(2 * var(--gap-size));
  grid-area: content;
`;

export const ContactCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: cover;
`;

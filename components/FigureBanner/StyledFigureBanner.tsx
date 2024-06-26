"use client";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledFigureBanner = styled.div`
  display: grid;
  grid-template-columns: calc(23 * var(--gap-size)) auto;
  grid-template-areas: "cover content";
  column-gap: calc(2 * var(--gap-size));
  align-items: end;
  justify-items: start;
  &.flip {
    grid-template-areas: "content cover";
    grid-template-columns: auto calc(23 * var(--gap-size));
  }
  &.align-top {
    align-items: start;
  }
  &.align-center {
    align-items: center;
  }
  ${breakpoint.monitor} {
    grid-template-columns: calc(23 * var(--gap-size)) auto;
    &.flip {
      grid-template-columns: auto calc(23 * var(--gap-size));
    }
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-template-areas: "cover" "content";
    row-gap: calc(3 * var(--gap-size));
    &.flip {
      grid-template-columns: unset;
      grid-template-areas: "cover" "content";
    }
  }
`;

export const FigureBannerCover = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const FigureBannerContent = styled.div`
  display: grid;
  justify-items: start;
  grid-area: content;
`;

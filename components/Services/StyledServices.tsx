"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { StyledHomepage } from "../../app/(client)/HomepageStyles";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const StyledServices = styled.div``;

export const ServicesCabinetHeaderWrapper = styled.div`
  height: calc(1 * var(--gap-size));
  display: flex;
  align-items: center;
`;

export const ServicesCabinetFooterWrapper = styled.div`
  height: calc(1 * var(--gap-size));
`;

export const ServiceHeader = styled.div`
  height: calc(2 * var(--gap-size));
  ${breakpoint.phone} {
    height: auto;
  }
  ${breakpoint.smallPhone} {
    margin: calc(1 * var(--gap-size)) 0 0;
  }
`;

export const ServiceHeaderContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 calc(1 * var(--gap-size));
  ${breakpoint.phone} {
    padding: ${spaces.s}px 0;
    flex-direction: column;
    align-items: start;
    ${StyledHomepage} & {
      flex-direction: row;
    }
  }
  ${breakpoint.smallPhone} {
    padding: ${spaces.xs}px 0;
  }
`;

export const Numbering = styled.div`
  width: calc(2 * var(--gap-size));
`;

export const ServiceContent = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 0 calc(1 * var(--gap-size)) 0 calc(3 * var(--gap-size));
  grid-template-areas: "left right";
  column-gap: calc(2 * var(--gap-size));
  ${breakpoint.smallNotebook} {
    grid-template-columns: 2fr 1fr;
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
    grid-template-areas: "right" "left";
  }
  ${breakpoint.phone} {
    padding: 0;
  }
`;

export const ServiceContentLeft = styled.div`
  height: 100%;
  grid-area: left;
  display: grid;
  row-gap: calc(1 * var(--gap-size));
  padding-bottom: calc(1 * var(--gap-size));
`;

export const ServiceContentLeftInner = styled.div`
  display: grid;
  row-gap: ${spaces.m}px;
  align-content: start;
`;

export const ServiceContentLeftHeaderContainer = styled.div`
  margin-top: ${spaces.m}px;
`;

export const ServiceContentLeftCta = styled.div`
  align-self: end;
`;

export const ServiceContentRight = styled.div`
  width: 100%;
  grid-area: right;
  position: relative;
  padding-bottom: calc(1 * var(--gap-size));
  overflow: hidden;
  ${breakpoint.tabletPortrait} {
    margin-top: calc(1 * var(--gap-size));
  }
`;

export const ServiceCover = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import { breakpoint } from "../../consts/breakpoints";

export const StyledServices = styled.div``;

export const ServicesCabinetHeaderWrapper = styled.div`
  height: ${({ theme }) => 1 * theme.gapSize}px;
  display: flex;
  align-items: center;
`;

export const ServicesCabinetFooterWrapper = styled.div`
  height: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ServiceHeader = styled.div`
  height: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const ServiceHeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Numbering = styled.div`
  width: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const ServiceContent = styled(Link)`
  all: unset;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 0 ${({ theme }) => 2 * theme.gapSize}px;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 2fr 1fr;
  }
`;

export const ServiceContentLeft = styled.div`
  height: 100%;
  padding: ${({ theme }) => 1 * theme.gapSize}px 0;
  display: grid;
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
  position: relative;
  padding: ${({ theme }) => 1 * theme.gapSize}px 0;
  overflow: hidden;
`;

export const ServiceCover = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

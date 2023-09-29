"use client";
import Image from "next/image";
import styled from "styled-components";

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
  /* justify-self: start; */
  /* flex-grow: 0;
  flex-shrink: 0; */
`;

export const ServiceHeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Numbering = styled.div`
  width: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const ServiceContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 ${({ theme }) => 2 * theme.gapSize}px;
  padding-top: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ServiceContentLeft = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ServiceContentLeftInner = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ServiceContentRight = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const ServiceCoverWrapperInner = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const ServiceCover = styled(Image)`
  object-fit: cover;
  width: 100%;
`;

"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import Image from "next/image";

export const StyledServices = styled.div``;

export const ServicesSectionHeaderWrapper = styled.div`
  margin-bottom: ${spaces.l}px;
`;

export const ServicesViewport = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => 1 * theme.gapSize}px 0;
`;

export const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;

export const ServiceHeader = styled.div`
  height: ${({ theme }) => 2 * theme.gapSize}px;
  justify-self: start;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

export const Numbering = styled.div`
  width: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const ServiceContent = styled(motion.div)`
  overflow: hidden;
  flex-grow: 1;
  justify-self: stretch;
  display: grid;
  grid-template-columns: ${({ theme }) =>
      0.4 * theme.columnCount * theme.gapSize}px auto;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px 0
    ${({ theme }) => 3 * theme.gapSize}px;
`;

export const ServiceCoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Inner = styled.div`
  position: absolute;
`;

export const ServiceCover = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const ServiceContentContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => 1 * theme.gapSize}px;
`;

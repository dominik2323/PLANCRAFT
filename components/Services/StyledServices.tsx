"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";
import Image from "next/image";

export const StyledServices = styled.div``;

export const ServicesViewport = styled.div`
  padding: ${spaces.m}px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ServicesCards = styled.div`
  height: 100%;
  background-color: gray;
  display: flex;
  flex-direction: column;
`;

export const ServiceBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  height: ${({ theme }) => 2 * theme.gapSize}px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  background: linear-gradient(#000000, #ffffff);
`;

export const ServiceContent = styled(motion.div)`
  background-color: red;
  flex-shrink: 0;
  flex-grow: 99;
`;

export const ServiceContentHideable = styled.div`
  display: grid;
  grid-template-columns: auto ${({ theme }) =>
      0.7 * theme.gapSize * theme.columnCount}px;
  height: 100%;
`;

export const ServiceCover = styled(Image)`
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TopDividerWrapper = styled.div`
  transform: translateY(${({ theme }) => 0.5 * theme.plusSize}px);
`;

export const BottomDividerWrapper = styled.div`
  transform: translateY(${({ theme }) => -0.5 * theme.plusSize}px);
`;

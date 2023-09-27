"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCabinet = styled.div``;

export const CabinetViewport = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CabinetHeader = styled.div``;

export const CabinetFooter = styled.div``;

export const CabinetItems = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const CabinetItemContent = styled(motion.div)`
  overflow: hidden;
`;

export const CabinetItemHeader = styled(motion.div)``;

export const CabinetItem = styled(motion.div)``;

"use client";

import { ReactNode } from "react";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Mini } from "../Typography/Mini";
import { StyledTableCol } from "./StyledTable";

interface TableColProps {
  children: ReactNode;
  delayAnimation?: number;
}

const TableCol = ({ children, delayAnimation = 0 }: TableColProps) => {
  return (
    <StyledTableCol>
      <RevealAnimation delay={delayAnimation}>
        <Mini>{children}</Mini>
      </RevealAnimation>
    </StyledTableCol>
  );
};

export default TableCol;

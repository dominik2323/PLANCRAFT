"use client";

import React, { ReactNode } from "react";
import { StyledTableCol } from "./StyledTableCol";
import { Mini } from "../Typography/Mini";

interface TableColProps {
  children: ReactNode;
}

const TableCol = ({ children }: TableColProps) => {
  return (
    <StyledTableCol>
      <Mini>{children}</Mini>
    </StyledTableCol>
  );
};

export default TableCol;

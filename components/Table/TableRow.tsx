"use client";

import React, { ReactNode } from "react";
import { StyledTableRow } from "./StyledTableRow";

interface TableRowProps {
  children: ReactNode;
}

const TableRow = ({ children }: TableRowProps) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default TableRow;

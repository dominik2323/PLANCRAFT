"use client";

import React from "react";
import { StyledTable } from "./StyledTable";
import TableRow from "./TableRow";
import TableCol from "./TableCol";

interface TableProps {
  items: { header: string; body: string }[];
}

const Table = ({ items }: TableProps) => {
  return (
    <StyledTable>
      <tbody>
        {items.map(({ body, header }, i) => (
          <TableRow key={i}>
            <TableCol>{header}</TableCol>
            <TableCol>{body}</TableCol>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

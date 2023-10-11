"use client";

import { ReactNode } from "react";
import { StyledTable, TableRow } from "./StyledTable";
import TableCol from "./TableCol";

interface TableProps {
  items: { header: string; body: ReactNode }[];
  delayAnimation?: number;
}

const Table = ({ items, delayAnimation = 0 }: TableProps) => {
  return (
    <StyledTable>
      <tbody>
        {items.map(({ body, header }, i) => (
          <TableRow key={i}>
            <TableCol delayAnimation={i * delayAnimation}>{header}</TableCol>
            <TableCol delayAnimation={i * delayAnimation + 0.5}>
              {body}
            </TableCol>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

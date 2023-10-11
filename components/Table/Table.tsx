"use client";

import { ReactNode } from "react";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { StyledTable } from "./StyledTable";
import TableCol from "./TableCol";
import TableRow from "./TableRow";

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
            <TableCol>
              <RevealAnimation delay={delayAnimation * i}>
                {header}
              </RevealAnimation>
            </TableCol>
            <TableCol>
              <RevealAnimation delay={delayAnimation * i + 0.5}>
                {body}
              </RevealAnimation>
            </TableCol>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

"use client";

import { ReactNode } from "react";
import Divider from "./Divider";
import {
  StyledDividerHeader,
  StyledDividerHeaderInner,
} from "./StyledDividerHeader";

interface DividerHeaderProps {
  children: ReactNode;
  className?: string;
}

const DividerHeader = ({ children, className }: DividerHeaderProps) => {
  return (
    <StyledDividerHeader className={className}>
      <StyledDividerHeaderInner className={className}>
        {children}
      </StyledDividerHeaderInner>
      <Divider />
    </StyledDividerHeader>
  );
};

export default DividerHeader;

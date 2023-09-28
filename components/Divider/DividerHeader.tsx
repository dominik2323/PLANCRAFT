"use client";

import { ReactNode } from "react";
import Divider from "./Divider";
import {
  StyledDividerHeader,
  StyledDividerHeaderInner,
} from "./StyledDividerHeader";

interface DividerHeaderProps {
  children: ReactNode;
}

const DividerHeader = ({ children }: DividerHeaderProps) => {
  return (
    <StyledDividerHeader>
      <StyledDividerHeaderInner>{children}</StyledDividerHeaderInner>
      <Divider />
    </StyledDividerHeader>
  );
};

export default DividerHeader;

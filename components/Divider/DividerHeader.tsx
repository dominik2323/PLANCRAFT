"use client";

import React, { ReactNode } from "react";
import {
  StyledDividerHeader,
  StyledDividerHeaderInner,
} from "./StyledDividerHeader";
import Divider from "./Divider";
import { Mini } from "../Typography/Mini";

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

"use client";

import React from "react";
import {
  SimpleFooterDividerHeaderInner,
  StyledSimpleFooter,
} from "./StyledSimpleFooter";
import DividerHeader from "../Divider/DividerHeader";
import { Mini } from "../Typography/Mini";
import Link from "../Link/Link";

interface SimpleFooterProps {}

const SimpleFooter = ({}: SimpleFooterProps) => {
  return (
    <StyledSimpleFooter>
      <DividerHeader className='flip big'>
        <SimpleFooterDividerHeaderInner>
          <Mini>{`${new Date().getFullYear()} PLANCRAFT`}</Mini>
          <Mini>
            Made with Style & Ease by{" "}
            <Link
              noArrow
              href={"https://steezy.studio"}
              target='_blank'
              className='underline inline'>
              steezy.studio
            </Link>
          </Mini>
        </SimpleFooterDividerHeaderInner>
      </DividerHeader>
    </StyledSimpleFooter>
  );
};

export default SimpleFooter;

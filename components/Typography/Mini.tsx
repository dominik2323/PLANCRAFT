"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Mini = styled.p`
  font-size: 18px;
  letter-spacing: 0.02em;
  line-height: 1.3em;
  color: ${colors.primary400};
  max-width: 600px;
  &.break-lines {
    white-space: pre-line;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  &.wide {
    max-width: unset;
  }
  &.tar {
    text-align: right;
  }
  ${breakpoint.monitor} {
    font-size: 21px;
    max-width: 700px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 16px;
  }
  ${breakpoint.tabletLandscape} {
    max-width: 500px;
  }
  ${breakpoint.phone} {
    font-size: 14px;
  }
  ${breakpoint.smallPhone} {
    font-size: 12px;
  }
  ${addColorClasses()}
`;

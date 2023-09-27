"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Micro = styled.p`
  font-size: 14px;
  letter-spacing: 0em;
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
  ${breakpoint.monitor} {
  }
  ${breakpoint.tabletLandscape} {
  }
  ${breakpoint.smallPhone} {
  }
  ${addColorClasses()}
`;

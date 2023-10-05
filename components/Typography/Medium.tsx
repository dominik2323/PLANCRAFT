"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";

export const Medium = styled.p`
  font-size: 64px;
  letter-spacing: -0.01em;
  line-height: 1.2em;
  color: ${colors.primary400};
  max-width: 1000px;
  &.break-lines {
    white-space: pre-line;
  }
  &.wide {
    max-width: unset;
  }
  &.indent {
    text-indent: 4em;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  ${breakpoint.monitor} {
    font-size: 70px;
    max-width: 1500px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 45px;
  }
  ${breakpoint.tabletLandscape} {
    max-width: 800px;
    font-size: 40px;
  }
  ${breakpoint.phone} {
  }
  ${breakpoint.smallPhone} {
  }
  ${addColorClasses()}
`;

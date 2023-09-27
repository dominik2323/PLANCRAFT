"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Big = styled.span`
  font-size: 115px;
  letter-spacing: -0.01em;
  line-height: 1.1em;
  color: ${colors.primary400};
  max-width: 1200px;
  &.indent {
    text-indent: 4em;
  }
  &.tight-lineheight {
    line-height: 1em;
  }
  &.wide {
    max-width: unset;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  ${breakpoint.monitor} {
  }
  ${breakpoint.smallNotebook} {
  }
  ${breakpoint.tabletLandscape} {
  }
  ${breakpoint.smallPhone} {
  }
  ${addColorClasses()}
`;

"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Large = styled.p`
  font-size: 96px;
  letter-spacing: -0.02em;
  line-height: 1.2em;
  color: ${colors.primary400};
  max-width: 1300px;
  &.indent {
    text-indent: 4em;
    ${breakpoint.phone} {
      text-indent: 2em;
    }
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
  ${breakpoint.phone} {
  }
  ${breakpoint.smallPhone} {
  }
  ${addColorClasses()}
`;

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

"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";

export const Large = styled.p`
  font-size: 96px;
  letter-spacing: -0.02em;
  line-height: 1.1em;
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
    font-size: 115px;
    max-width: 1600px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 70px;
    max-width: 1000px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 60px;
    max-width: 900px;
  }
  ${breakpoint.phone} {
    font-size: 30px;
  }
  ${breakpoint.smallPhone} {
  }
  ${addColorClasses()}
`;

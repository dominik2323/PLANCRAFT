"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Big = styled.span`
  font-size: 40px;
  letter-spacing: -0.01em;
  line-height: 1.3em;
  color: ${colors.white};
  max-width: 700px;
  &.indent {
    text-indent: 4em;
  }
  &.tight-lineheight {
    line-height: 1em;
  }
  &.no-max-width {
    max-width: unset;
  }
  &.uppercase {
    text-transform: uppercase;
  }
  ${breakpoint.monitor} {
    font-size: 60px;
    max-width: 1000px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 40px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 30px;
    max-width: 500px;
  }
  ${breakpoint.smallPhone} {
    font-size: 21px;
  }
  ${addColorClasses()}
`;

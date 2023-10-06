"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";

export const Small = styled.p`
  font-size: 28px;
  letter-spacing: 0.02em;
  line-height: 1.3em;
  color: ${colors.primary400};
  max-width: 600px;
  &.indent {
    text-indent: 4em;
  }
  &.wide {
    max-width: unset;
  }
  &.uppercase {
    text-transform: uppercase;
    line-height: 1.1em;
  }
  &.navlink {
    ${breakpoint.tabletPortrait} {
      font-size: 30px;
    }
    ${breakpoint.phone} {
      font-size: 21px;
    }
    ${breakpoint.smallPhone} {
      font-size: 16px;
    }
  }
  ${breakpoint.monitor} {
    font-size: 35px;
    max-width: 700px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 21px;
    max-width: 500px;
  }
  ${breakpoint.tabletLandscape} {
    font-size: 18px;
  }
  ${breakpoint.smallPhone} {
  }
  ${addColorClasses()}
`;

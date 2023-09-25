"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";
import { spaces } from "../../consts/spaces";

export const Small = styled.p`
  font-size: 28px;
  letter-spacing: 0.02em;
  line-height: 1.6em;
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

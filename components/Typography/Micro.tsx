"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { addColorClasses } from "../../helpers/addColorClasses";
import { breakpoint } from "../../consts/breakpoints";

export const Micro = styled.p`
  font-size: 15px;
  letter-spacing: 0.02em;
  line-height: 1.4em;
  color: ${colors.white};
  max-width: 400px;
  &.max-width {
    max-width: unset;
  }
  &.tac {
    text-align: center;
  }
  &.uppercase {
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  &.navlink {
    &.active {
      color: ${colors.red400};
    }
    ${breakpoint.tabletPortrait} {
      font-size: 50px;
      letter-spacing: -0.02em;
      max-width: unset;
      &.active {
        color: ${({ theme }) =>
          theme.type === "dark" ? colors.white : colors.black};
      }
    }
    ${breakpoint.phone} {
      font-size: 30px;
    }
    ${breakpoint.smallPhone} {
      font-size: 24px;
    }
  }
  ${breakpoint.tabletLandscape} {
    font-size: 12px;
  }
  ${breakpoint.monitor} {
    font-size: 21px;
    max-width: 600px;
  }
  ${addColorClasses()}
`;

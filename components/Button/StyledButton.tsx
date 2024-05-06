"use client";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const ButtonLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: calc(0.25 * var(--gap-size));
  font-size: 20px;
  color: ${colors.primary400};
  column-gap: ${spaces.s}px;
  height: calc(var(--plus-size) * var(--gap-size));
  width: calc(5 * var(--gap-size));
  text-transform: uppercase;
  &.skinny {
    width: calc(3 * var(--gap-size));
  }
  ${breakpoint.monitor} {
    width: calc(4 * var(--gap-size));
  }
  ${breakpoint.smallNotebook} {
    width: calc(6 * var(--gap-size));
    &.skinny {
      width: calc(4 * var(--gap-size));
    }
  }
  ${breakpoint.tabletPortrait} {
    width: calc(10 * var(--gap-size));
    &.skinny {
      width: calc(6 * var(--gap-size));
    }
  }
`;

export const Cap = styled.div`
  width: 100%;
`;

export const ButtonInner = styled.div`
  width: 100%;
  text-align: center;
  ${breakpoint.smallNotebook} {
    font-size: 14px;
  }
  ${breakpoint.smallPhone} {
    font-size: 12px;
  }
`;

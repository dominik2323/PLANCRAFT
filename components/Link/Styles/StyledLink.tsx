"use client";

import styled from "styled-components";
import { spaces } from "../../../consts/spaces";

export const StyledLink = styled.a`
  &,
  a,
  a:link,
  a:visited {
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    gap: ${spaces.xs}px;
    text-transform: inherit;
    flex-shrink: 0;
    align-items: center;
    &.flip {
      flex-direction: row-reverse;
      svg {
        transform: rotate(180deg);
      }
    }
    &.inline {
      display: inline-flex;
    }
    &.underline {
      text-decoration: underline;
    }
    &:visited {
      color: inherit;
    }
  }
`;

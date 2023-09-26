"use client";

import styled from "styled-components";
import { colors } from "../../../consts/colors";
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
    text-transform: uppercase;
    &:visited {
      color: inherit;
    }
  }
`;

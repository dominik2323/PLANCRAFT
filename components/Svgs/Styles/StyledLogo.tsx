"use client";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledLogo = styled.svg`
  display: block;
  width: auto;
  height: 100%;
  max-width: 300px;
  ${breakpoint.phone} {
    max-width: 250px;
  }
  ${breakpoint.custom(400)} {
    max-width: 150px;
  }
`;

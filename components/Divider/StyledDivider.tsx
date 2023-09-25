"use client";

import styled from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";

export const StyledDivider = styled.div`
  display: flex;
  align-items: center;
`;

export const DividerLine = styled.div<{ color: ColorKeys }>`
  width: 100%;
  height: 1.5px;
  background-color: ${({ color }) => colors[color]};
`;

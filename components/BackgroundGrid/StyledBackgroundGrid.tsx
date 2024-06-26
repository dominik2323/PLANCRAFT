"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";

export const StyledBackgroundGrid = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

export const Dot = styled.rect`
  fill: ${colors.primary400};
`;

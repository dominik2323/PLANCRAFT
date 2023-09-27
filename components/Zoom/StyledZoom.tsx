"use client";
import styled from "styled-components";

export const StyledZoom = styled.div``;

export const ZoomViewport = styled.div`
  height: 100%;
`;

export const ElevatorViewport = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const ZoomItem = styled.div``;

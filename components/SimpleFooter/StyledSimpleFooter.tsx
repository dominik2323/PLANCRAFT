"use client";
import styled from "styled-components";

export const StyledSimpleFooter = styled.footer`
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

export const SimpleFooterDividerHeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

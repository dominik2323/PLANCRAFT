"use client";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  margin-top: ${({ theme }) => 1 * theme.gapSize}px;
  position: relative;
`;

export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => 1 * theme.gapSize}px
    ${({ theme }) => 2 * theme.gapSize}px;
`;

export const BurgerWrapper = styled.div`
  display: block;
  height: ${({ theme }) => 1 * theme.gapSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerWrapper = styled.div`
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

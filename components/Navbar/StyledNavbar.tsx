"use client";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  margin-top: ${({ theme }) => 1 * theme.gapSize}px;
  position: relative;
  padding: ${({ theme }) => 1 * theme.gapSize}px
    ${({ theme }) => 2 * theme.gapSize}px;
`;

export const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BurgerWrapper = styled.div`
  display: block;
  height: ${({ theme }) => 1 * theme.gapSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividerWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => -1 * theme.plusSize * 0.5 + 1}px;
  left: ${({ theme }) => 1 * theme.gapSize - theme.plusSize / 2}px;
  height: 10px;
  width: calc(100% - ${({ theme }) => 2 * theme.gapSize - theme.plusSize}px);
`;

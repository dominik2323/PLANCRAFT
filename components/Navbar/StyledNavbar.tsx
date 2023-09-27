"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";

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

export const LogoWrapper = styled.div`
  height: 100%;
`;

export const DividerWrapper = styled.div`
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

export const NavLinks = styled.div`
  height: 100dvh;
  height: 100vw;
  background-color: ${colors.primary400};
  z-index: 9;
`;

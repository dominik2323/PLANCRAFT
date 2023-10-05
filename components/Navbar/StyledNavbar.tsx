"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { motion } from "framer-motion";
import { spaces } from "../../consts/spaces";
import Link from "next/link";
import { breakpoint } from "../../consts/breakpoints";

export const StyledNavbar = styled(motion.nav)`
  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavbarPlaceholder = styled.div`
  height: ${({ theme }) => 4 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    height: ${({ theme }) => 5 * theme.gapSize}px;
  }
  ${breakpoint.tabletLandscape} {
    height: ${({ theme }) => 7 * theme.gapSize}px;
  }
`;

export const TopbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => 1 * theme.gapSize}px
    ${({ theme }) => 2 * theme.gapSize}px;
`;

export const Topbar = styled(motion.div)`
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const BurgerWrapper = styled.div`
  display: block;
  height: ${({ theme }) => 1 * theme.gapSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled(Link)`
  all: unset;
  cursor: pointer;
  height: 100%;
`;

export const NavbarDividerWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
  &.show {
    display: block;
    padding-top: ${({ theme }) => 1 * theme.gapSize}px;
  }
  &.hide {
    display: none;
    padding-top: ${({ theme }) => 0 * theme.gapSize}px;
  }
`;

export const NavLinks = styled(motion.div)`
  position: absolute;
  z-index: 1;
  inset: 0;
  height: 100dvh;
  background-color: ${colors.primary400};
  padding: ${({ theme }) => 1 * theme.gapSize}px;
  padding-top: ${({ theme }) => 5 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    padding-top: ${({ theme }) => 6 * theme.gapSize}px;
  }
`;

export const NavigationDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  height: 100%;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavlinkWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavlinkDividerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

export const NavLink = styled(Link)`
  all: unset;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LinkDescription = styled(motion.span)`
  font-size: 40px;
  color: ${colors.white};
  ${breakpoint.monitor} {
    font-size: 60px;
  }
  ${breakpoint.smallNotebook} {
    font-size: 30px;
  }
`;

export const NavlinkInner = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

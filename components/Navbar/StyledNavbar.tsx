"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";

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
  max-width: ${({ theme }) => 1.25 * theme.gapSize}px;
`;

export const LogoWrapper = styled(Link)`
  all: unset;
  cursor: pointer;
  height: 100%;
  aspect-ratio: 321/43;
  ${breakpoint.tabletPortrait} {
    height: ${({ theme }) => 1.75 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    height: ${({ theme }) => 1 * theme.gapSize}px;
  }
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
  ${breakpoint.tabletPortrait} {
    padding-top: ${({ theme }) => 10 * theme.gapSize}px;
  }
`;

export const NavigationDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  height: 100%;
  ${breakpoint.tabletPortrait} {
    grid-template-columns: unset;
  }
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
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;

export const NavlinkInner = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => 1 * theme.gapSize}px;
`;

export const NavlinkInnerArrowW = styled(motion.span)`
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;

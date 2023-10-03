"use client";
import styled from "styled-components";
import { colors } from "../../consts/colors";
import { motion } from "framer-motion";
import { spaces } from "../../consts/spaces";
import Link from "next/link";

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
  /* border-top: 1px solid ${colors.white}; */
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
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

export const LinkDescription = styled(motion.div)``;

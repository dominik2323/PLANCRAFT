"use client";

import { useState } from "react";
import { useTheme } from "styled-components";
import Burger from "../Burger/Burger";
import Divider from "../Divider/Divider";
import {
  BurgerWrapper,
  DividerWrapper,
  LogoWrapper,
  NavLinks,
  StyledNavbar,
  Topbar,
} from "./StyledNavbar";
import Logo from "../Svgs/Logo";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { gapSize } = useTheme();
  return (
    <StyledNavbar>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <Topbar>
        <LogoWrapper>
          <Logo fill={isOpen ? "white" : "primary400"} />
        </LogoWrapper>
        <BurgerWrapper>
          <Burger
            isOpen={isOpen}
            onClick={() => {
              setIsOpen((p) => !p);
            }}
            width={gapSize}
            height={gapSize / 3}
            strokeWidth={3}
            stroke={isOpen ? "white" : "primary400"}
          />
        </BurgerWrapper>
      </Topbar>
      {/* <NavLinks></NavLinks> */}
    </StyledNavbar>
  );
};

export default Navbar;

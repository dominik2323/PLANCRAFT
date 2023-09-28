"use client";

import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { easing } from "../../consts/animationConfig";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import Burger from "../Burger/Burger";
import Divider from "../Divider/Divider";
import Logo from "../Svgs/Logo";
import { Small } from "../Typography/Small";
import {
  BurgerWrapper,
  DividerWrapper,
  LinkDescription,
  LogoWrapper,
  NavLink,
  NavLinks,
  NavbarPlaceholder,
  Navigation,
  NavigationDashboard,
  StyledNavbar,
  Topbar,
  TopbarContent,
} from "./StyledNavbar";
import { usePathname } from "next/navigation";

interface NavbarProps {}

const navConfig = [
  {
    name: "Projektová dokumentace",
    slug: "projektova-dokumentace",
    perex:
      "0Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum.",
  },
  {
    name: "Zaměřování objektů",
    slug: "zamerovani-objektu",
    perex:
      "1Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum.",
  },
  {
    name: "Energetická úspornost",
    slug: "energeticka-uspornost",
    perex:
      "2Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum.",
  },
  {
    name: "Design due diligence",
    slug: "design-due-diligence",
    perex:
      "3Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum.",
  },
  {
    name: "Projekty",
    slug: "projekty",
    perex:
      "4Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum.",
  },
  {
    name: "O nás",
    slug: "o-nas",
    perex:
      "5Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum.",
  },
  {
    name: "Kontakt",
    slug: "kontakt",
    perex:
      "6Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum.",
  },
];

const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { directionDown } = useScrollDirection();
  const { gapSize } = useTheme();
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    if (directionDown) {
      setIsOpen(false);
    }
  }, [directionDown]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <NavbarPlaceholder />
      <StyledNavbar animate={{ y: directionDown ? `-100%` : `0%` }}>
        <Topbar>
          <DividerWrapper>
            <Divider fill={isOpen ? "white" : "primary400"} />
          </DividerWrapper>
          <TopbarContent>
            <LogoWrapper href={"/"}>
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
          </TopbarContent>
        </Topbar>
        <AnimatePresence>
          {isOpen && (
            <NavLinks
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              transition={{ ease: easing }}
              variants={{
                hidden: { y: `-100%` },
                visible: { y: `0%` },
              }}>
              <NavigationDashboard>
                <Navigation>
                  {navConfig.map(({ name, slug }, i) => (
                    <Fragment key={i}>
                      {i === 0 && <Divider hidePlus fill='white' />}
                      <NavLink
                        href={slug}
                        onMouseEnter={() => setHoverIndex(i)}>
                        <Small className='white'>{name}</Small>
                      </NavLink>
                      {navConfig.length - 1 !== i && (
                        <Divider hidePlus fill='white' />
                      )}
                    </Fragment>
                  ))}
                </Navigation>
                <LinkDescription>
                  <Small className='white'>{navConfig[hoverIndex].perex}</Small>
                </LinkDescription>
              </NavigationDashboard>
              <Divider fill='white' />
            </NavLinks>
          )}
        </AnimatePresence>
      </StyledNavbar>
    </>
  );
};

export default Navbar;

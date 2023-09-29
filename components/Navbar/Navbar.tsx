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
import { servicesData } from "../../app/service/[slug]/servicesData";
import { projectsData } from "../../app/projects/[[...category]]/(client)/projectsData";
import { aboutData } from "../../app/about/(client)/aboutData";
import { contactData } from "../../app/contact/(client)/contactData";

interface NavbarProps {}

const navConfig = [
  ...Object.keys(servicesData).map((slug) => ({
    slug: `/sluzba/${slug}`,
    perex: servicesData[slug].servicePerex,
    name: servicesData[slug].name,
  })),
  {
    name: "Projekty",
    slug: "/projekty",
    perex: projectsData.heroPerex,
  },
  {
    name: "O nás",
    slug: "/o-nas",
    perex: aboutData.introPerex,
  },
  {
    name: "Kontakt",
    slug: "/kontakt",
    perex: contactData.header,
  },
];

const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { directionDown, scrollPos } = useScrollDirection();
  const { gapSize, plusSize } = useTheme();
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
      <StyledNavbar
        animate={{
          y:
            scrollPos <= 100
              ? 0
              : directionDown
              ? `-100%`
              : `${-1 * gapSize - plusSize}px`,
        }}>
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

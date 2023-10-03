"use client";

import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "styled-components";
import { easing } from "../../consts/animationConfig";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import Burger from "../Burger/Burger";
import Divider from "../Divider/Divider";
import Logo from "../Svgs/Logo";
import { Small } from "../Typography/Small";
import {
  BurgerWrapper,
  NavbarDividerWrapper,
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
  NavlinkWrapper,
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
  const [hideableNavbar, setHideableNavbar] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const hideNavbarElements = document.querySelectorAll("[data-hide-navbar]");
    if (hideNavbarElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          setHideableNavbar(entry.isIntersecting);
        }),
      { rootMargin: "-10% 0% -90% 0%" }
    );

    hideNavbarElements.forEach((el) => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

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
          y: hideableNavbar || directionDown ? `-100%` : `0%`,
        }}>
        <Topbar>
          <NavbarDividerWrapper className={scrollPos < 100 ? "show" : "hide"}>
            <Divider fill={isOpen ? "white" : "primary400"} />
          </NavbarDividerWrapper>
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
              key={"navlinks"}
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              variants={{
                hidden: {
                  y: `-100%`,
                  transition: {
                    when: "afterChildren",
                    staggerChildren: 0.1,
                    ease: easing,
                    duration: 0.7,
                  },
                },
                visible: {
                  y: `0%`,
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.1,
                    ease: easing,
                    duration: 0.7,
                  },
                },
              }}>
              <NavigationDashboard>
                <Navigation>
                  {navConfig.map(({ name, slug }, i) => (
                    <NavlinkWrapper
                      key={i}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}>
                      <NavLink
                        href={slug}
                        onMouseEnter={() => setHoverIndex(i)}>
                        <Small className='white'>{name}</Small>
                      </NavLink>
                    </NavlinkWrapper>
                  ))}
                </Navigation>
                <LinkDescription
                  transition={{ delay: 0 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}>
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

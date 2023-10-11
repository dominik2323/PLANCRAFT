"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "styled-components";
import { aboutData } from "../../app/about/(client)/aboutData";
import { contactData } from "../../app/contact/(client)/contactData";
import { projectsData } from "../../app/projects/[[...category]]/(client)/projectsData";
import { servicesData } from "../../app/service/[slug]/servicesData";
import { easing } from "../../consts/animationConfig";
import { device } from "../../consts/breakpoints";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useWindowSize } from "../../hooks/useWindowSize";
import Burger from "../Burger/Burger";
import { DisableScroll } from "../DisableScroll/DisableScroll";
import Divider from "../Divider/Divider";
import Arrow from "../Svgs/Arrow";
import Logo from "../Svgs/Logo";
import { Small } from "../Typography/Small";
import {
  BurgerWrapper,
  LinkDescription,
  LogoWrapper,
  NavLink,
  NavLinks,
  NavbarDividerWrapper,
  NavbarPlaceholder,
  Navigation,
  NavigationDashboard,
  NavlinkDividerWrapper,
  NavlinkInner,
  NavlinkInnerArrowW,
  NavlinkWrapper,
  StyledNavbar,
  Topbar,
  TopbarContent,
} from "./StyledNavbar";

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
  const { gapSize, plusSize, setisLayoutVisible } = useTheme();
  const { w } = useWindowSize();
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
    setIsOpen(false);
    setHideableNavbar(false);
  }, [pathname]);

  return (
    <>
      <NavbarPlaceholder />
      <StyledNavbar
        animate={{
          y: isOpen ? "0%" : hideableNavbar || directionDown ? `-100%` : `0%`,
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
                  setisLayoutVisible(false);
                }}
                width={w <= device.phone ? gapSize * 2 : gapSize}
                height={w <= device.phone ? (gapSize / 3) * 2 : gapSize / 3}
                strokeWidth={3}
                stroke={isOpen ? "white" : "primary400"}
              />
            </BurgerWrapper>
          </TopbarContent>
        </Topbar>
        <AnimatePresence
          onExitComplete={() => {
            setisLayoutVisible(true);
          }}>
          {isOpen && (
            <>
              <DisableScroll />
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
                      duration: 1,
                    },
                  },
                  visible: {
                    y: `0%`,
                    transition: {
                      when: "beforeChildren",
                      staggerChildren: 0.1,
                      ease: easing,
                      duration: 1,
                    },
                  },
                }}>
                <NavigationDashboard>
                  <Navigation>
                    {navConfig.map(({ name, slug }, i) => {
                      const isActive =
                        slug === pathname ||
                        (pathname.includes("projekt/") && slug === "/projekty");
                      const isHover = hoverIndex === i;
                      return (
                        <NavlinkWrapper
                          key={i}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}>
                          <NavLink
                            onMouseEnter={() => setHoverIndex(i)}
                            href={slug}>
                            <NavlinkDividerWrapper>
                              <Divider hidePlus fill='white' animate={isOpen} />
                            </NavlinkDividerWrapper>
                            <NavlinkInner
                              animate={{
                                x:
                                  w <= device.tabletPortrait
                                    ? 0
                                    : isHover
                                    ? 50
                                    : 0,
                              }}
                              transition={{ ease: easing }}>
                              <NavlinkInnerArrowW
                                animate={{
                                  x: isHover ? 0 : -50,
                                  opacity: isHover ? 1 : 0,
                                }}
                                transition={{ ease: easing }}>
                                <Arrow
                                  stroke={!isActive ? "primary300" : "white"}
                                  strokeWidth={2}
                                />
                              </NavlinkInnerArrowW>
                              <Small
                                className={`navlink ${
                                  !isActive ? "primary300" : "white"
                                }`}>
                                {name}
                              </Small>
                            </NavlinkInner>
                          </NavLink>
                        </NavlinkWrapper>
                      );
                    })}
                  </Navigation>
                  <LinkDescription
                    key={hoverIndex}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}>
                    {navConfig[hoverIndex].perex}
                  </LinkDescription>
                </NavigationDashboard>
                <Divider fill='white' />
              </NavLinks>
            </>
          )}
        </AnimatePresence>
      </StyledNavbar>
    </>
  );
};

export default Navbar;

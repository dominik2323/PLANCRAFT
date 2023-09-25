"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BottomDividerWrapper,
  HeaderWrapper,
  ServiceBlock,
  ServiceContent,
  ServiceContentHideable,
  ServiceCover,
  ServicesCards,
  ServicesViewport,
  StyledServices,
  TopDividerWrapper,
} from "./StyledServices";
import Elevator from "../Elevator/Elevator";
import { Medium } from "../Typography/Medium";
import { easing } from "../../consts/animationConfig";
import { Small } from "../Typography/Small";
import { useTheme } from "styled-components";
import Divider from "../Divider/Divider";
import { Mini } from "../Typography/Mini";
import { AnimatePresence } from "framer-motion";

interface ServicesProps {}

const intervals = [
  [0, 0.25],
  [0.25, 0.5],
  [0.5, 0.75],
  [0.75, 1],
];

const services = [
  {
    header: "PROJEKTOVÁ DOKUMENTACE",
    perex:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum. Nulla est. In dapibus augue non sapien.",
  },
  {
    header: "PASPORTIZACE BUDOV",
    perex:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum. Nulla est. In dapibus augue non sapien.",
  },
  {
    header: "ENERGETICKÁ ÚSPORNOST",
    perex:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum. Nulla est. In dapibus augue non sapien.",
  },
  {
    header: "DESIGN DUE DILIGENCE",
    perex:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum. Nulla est. In dapibus augue non sapien.",
  },
];

const Services = ({}: ServicesProps) => {
  const { gapSize, columnCount } = useTheme();
  const [servicesContainerHeight, setServicesContainerHeight] =
    useState<number>(null);
  const cardContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setServicesContainerHeight(cardContainer.current.clientHeight);
    };

    handleResize();
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledServices>
      <Elevator scrollHeight='200vh'>
        {({ progress }) => (
          <ServicesViewport>
            <Mini className='uppercase'>Naše služby</Mini>
            <TopDividerWrapper>
              <Divider />
            </TopDividerWrapper>
            <ServicesCards ref={cardContainer}>
              {services.map(({ header, perex }, i) => {
                const interval = intervals[i];
                const isActive =
                  interval[0] < progress && interval[1] >= progress;

                return (
                  <ServiceBlock key={i}>
                    <HeaderWrapper>
                      <Small className='wide'>{`0${
                        i + 1
                      }\u2001\u2001${header}`}</Small>
                    </HeaderWrapper>
                    {/* <AnimatePresence>
                      {isActive && ( */}
                    {i === 0 && (
                      <ServiceContent
                        initial={{ height: "0%" }}
                        animate={{
                          height: "max-content",
                        }}
                        exit={{ height: "0%" }}
                      />
                    )}
                    {/* )} */}
                    {/* </AnimatePresence> */}
                  </ServiceBlock>
                );
              })}
            </ServicesCards>
            <BottomDividerWrapper>
              <Divider />
            </BottomDividerWrapper>
          </ServicesViewport>
        )}
      </Elevator>
    </StyledServices>
  );
};

export default Services;

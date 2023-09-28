"use client";

import { Cabinet as CabinetType } from "../../app/service/[slug]/servicesData";
import Bullet, { Bullets } from "../Bullets/Bullet";
import Cabinet from "../Cabinet/Cabinet";
import Divider from "../Divider/Divider";
import DividerHeader from "../Divider/DividerHeader";
import Link from "../Link/Link";
import { Micro } from "../Typography/Micro";
import { Mini } from "../Typography/Mini";
import { Small } from "../Typography/Small";
import {
  Numbering,
  ServiceContent,
  ServiceContentLeftInner,
  ServiceContentLeft,
  ServiceContentRight,
  ServiceCover,
  ServiceCoverWrapperInner,
  ServiceHeader,
  ServiceHeaderContent,
  ServicesCabinetFooterWrapper,
  StyledServices,
} from "./StyledServices";

interface ServicesProps extends CabinetType {}

const Services = ({ list, mainHeader }: ServicesProps) => {
  return (
    <StyledServices>
      <Cabinet
        header={
          <DividerHeader>
            <Mini className='uppercase'>{mainHeader}</Mini>
          </DividerHeader>
        }
        cards={list.map(({ header, content, image }, i) => [
          <ServiceHeader>
            {0 !== i && <Divider hidePlus />}
            <ServiceHeaderContent>
              <Numbering>
                <Small>{`0${i + 1}`}</Small>
              </Numbering>
              <Small className='uppercase'>{header}</Small>
            </ServiceHeaderContent>
          </ServiceHeader>,
          <ServiceContent>
            <ServiceContentLeft>
              <ServiceContentLeftInner>
                {content.map((item, i) => {
                  if (item.type === "text") {
                    return <Mini key={i}>{item.text}</Mini>;
                  }
                  if (item.type === "header") {
                    return <Mini key={i}>{item.header}</Mini>;
                  }
                  if (item.type === "bullets") {
                    return (
                      <Bullets key={i}>
                        {item.bullets.map(({ header, list }, i) => (
                          <Bullet level={1} key={i} index={i}>
                            <Micro>{header}</Micro>
                            {list.map((item, i) => (
                              <Bullet level={2} key={i} index={i}>
                                <Micro>{item}</Micro>
                              </Bullet>
                            ))}
                          </Bullet>
                        ))}
                      </Bullets>
                    );
                  }
                })}
              </ServiceContentLeftInner>
              {/* TODO add link */}
              <Link href={""}>
                <Mini>{"Zjistit více"}</Mini>
              </Link>
            </ServiceContentLeft>
            <ServiceContentRight>
              <ServiceCoverWrapperInner>
                <ServiceCover
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </ServiceCoverWrapperInner>
            </ServiceContentRight>
          </ServiceContent>,
        ])}
        footer={
          <ServicesCabinetFooterWrapper>
            <Divider />
          </ServicesCabinetFooterWrapper>
        }
      />
    </StyledServices>
  );
};

export default Services;

{
  /* <StyledServices>
<Elevator scrollHeight='200vh'>
  {({ progress }) => (
    <ServicesViewport>
      <ServicesSectionHeaderWrapper>
        <Mini className='uppercase'>Naše služby</Mini>
      </ServicesSectionHeaderWrapper>
      <Divider />
      <ServicesList>
        {services.map(({ header, perex }, i) => {
          const interval = intervals[i];
          const isActive =
            interval[0] <= progress && interval[1] >= progress;

          return (
            <Fragment key={i}>
              {0 !== i && <Divider hidePlus />}
              <ServiceHeader>
                <Numbering>
                  <Small>{`0${i + 1}`}</Small>
                </Numbering>
                <Small>{header}</Small>
              </ServiceHeader>
              <AnimatePresence>
                {isActive && (
                  <ServiceContent
                    key={i}
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    exit={{ height: "0%" }}
                    transition={{ ease: easing, duration: 0.7 }}>
                    <ServiceContentContent>
                      <Mini>{perex}</Mini>
                      {/* TODO add links */
}
{
  /*
                      <Link href={""}>
                        <Mini>fdkl</Mini>
                      </Link>
                    </ServiceContentContent>
                    <ServiceCoverWrapper>
                      <Inner>
                        <ServiceCover
                          src={"/imgs/projektova-dokumentace.jpg"}
                          alt={"header"}
                        />
                      </Inner>
                    </ServiceCoverWrapper>
                  </ServiceContent>
                )}
              </AnimatePresence>
            </Fragment>
          );
        })}
      </ServicesList>
      <Divider />
    </ServicesViewport>
  )}
</Elevator>
</StyledServices> */
}

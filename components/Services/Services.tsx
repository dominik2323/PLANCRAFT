"use client";

import { Cabinet as CabinetType } from "../../app/service/[slug]/servicesData";
import { device } from "../../consts/breakpoints";
import { useWindowSize } from "../../hooks/useWindowSize";
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
  ServiceContentLeft,
  ServiceContentLeftCta,
  ServiceContentLeftHeaderContainer,
  ServiceContentLeftInner,
  ServiceContentRight,
  ServiceCover,
  ServiceHeader,
  ServiceHeaderContent,
  ServicesCabinetFooterWrapper,
  StyledServices,
} from "./StyledServices";

interface ServicesProps extends CabinetType {}

const Services = ({ list, mainHeader }: ServicesProps) => {
  const { w } = useWindowSize();

  return (
    <StyledServices data-hide-navbar>
      <Cabinet
        disable={w <= device.miniPhone}
        header={
          <DividerHeader className='no-padding'>
            <Mini className='uppercase'>{mainHeader}</Mini>
          </DividerHeader>
        }
        cards={list.map(({ header, content, image, slug }, i) => [
          <ServiceHeader>
            {0 !== i && <Divider hidePlus />}
            <ServiceHeaderContent>
              <Numbering>
                <Small>{`0${i + 1}`}</Small>
              </Numbering>
              <Small className='uppercase wide'>{header}</Small>
            </ServiceHeaderContent>
          </ServiceHeader>,
          <ServiceContent as={slug ? undefined : "span"} href={slug}>
            <ServiceContentLeft>
              <ServiceContentLeftInner>
                {content.map((item, i) => {
                  if (item.type === "text") {
                    return <Mini key={i}>{item.text}</Mini>;
                  }
                  if (item.type === "header") {
                    return (
                      <ServiceContentLeftHeaderContainer>
                        <Micro key={i}>{item.header}</Micro>
                      </ServiceContentLeftHeaderContainer>
                    );
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
              {slug && (
                <ServiceContentLeftCta>
                  <Link href={slug} as={"span"}>
                    <Mini className='uppercase'>{"Zjistit více"}</Mini>
                  </Link>
                </ServiceContentLeftCta>
              )}
            </ServiceContentLeft>
            <ServiceContentRight>
              <ServiceCover
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
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

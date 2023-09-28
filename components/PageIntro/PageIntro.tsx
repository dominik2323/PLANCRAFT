"use client";

import React from "react";
import FigureBanner from "../FigureBanner/FigureBanner";
import ScrollFigureBanner from "../ScrollFigureBanner/ScrollFigureBanner";
import { Large } from "../Typography/Large";
import { Medium } from "../Typography/Medium";
import { Mini } from "../Typography/Mini";
import {
  StyledPageIntro,
  PageIntroHero,
  PageIntroCta,
} from "./StyledPageIntro";
import { ImageProps } from "../../app/service/[slug]/servicesData";
import Button from "../Button/Button";

export interface PageIntroProps {
  heroHeader: string;
  withCta?: boolean;
  introPerex: string;
  figureBanner: {
    image: ImageProps;
    perex: string;
  };
  scrollFigureBanner: {
    image: ImageProps;
    items: string[];
  };
}

const PageIntro = ({
  figureBanner,
  heroHeader,
  introPerex,
  scrollFigureBanner,
  withCta = false,
}: PageIntroProps) => {
  return (
    <StyledPageIntro>
      <PageIntroHero>
        <Large>{heroHeader}</Large>
        <FigureBanner
          className='flip align-top'
          src={figureBanner.image.src}
          width={figureBanner.image.width}
          height={figureBanner.image.height}
          alt={figureBanner.image.alt}>
          <Mini>{figureBanner.perex}</Mini>
          {withCta && (
            <PageIntroCta>
              <Button href={"/kontakt"}>Poptat službu</Button>
            </PageIntroCta>
          )}
        </FigureBanner>
        <Medium>{introPerex}</Medium>
      </PageIntroHero>
      <ScrollFigureBanner
        className='align-center'
        src={scrollFigureBanner.image.src}
        width={scrollFigureBanner.image.width}
        height={scrollFigureBanner.image.height}
        alt={scrollFigureBanner.image.alt}
        items={scrollFigureBanner.items}
      />
    </StyledPageIntro>
  );
};

export default PageIntro;

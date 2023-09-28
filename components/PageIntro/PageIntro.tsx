"use client";

import React from "react";
import FigureBanner from "../FigureBanner/FigureBanner";
import ScrollFigureBanner from "../ScrollFigureBanner/ScrollFigureBanner";
import { Large } from "../Typography/Large";
import { Medium } from "../Typography/Medium";
import { Mini } from "../Typography/Mini";
import { StyledPageIntro, AboutHero } from "./StyledPageIntro";

export type PageIntroImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export interface PageIntroProps {
  heroHeader: string;
  introPerex: string;
  figureBanner: {
    image: PageIntroImageProps;
    perex: string;
  };
  scrollFigureBanner: {
    image: PageIntroImageProps;
    items: string[];
  };
}

const PageIntro = ({
  figureBanner,
  heroHeader,
  introPerex,
  scrollFigureBanner,
}: PageIntroProps) => {
  return (
    <StyledPageIntro>
      <AboutHero>
        <Large>{heroHeader}</Large>
        <FigureBanner
          className='flip align-top'
          src={figureBanner.image.src}
          width={figureBanner.image.width}
          height={figureBanner.image.height}
          alt={figureBanner.image.alt}>
          <Mini>{figureBanner.perex}</Mini>
        </FigureBanner>
        <Medium>{introPerex}</Medium>
      </AboutHero>
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

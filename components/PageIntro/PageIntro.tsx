"use client";

import { ImageProps } from "../../app/service/[slug]/servicesData";
import Button from "../Button/Button";
import FigureBanner from "../FigureBanner/FigureBanner";
import ScrollFigureBanner from "../ScrollFigureBanner/ScrollFigureBanner";
import { Large } from "../Typography/Large";
import { Medium } from "../Typography/Medium";
import { Mini } from "../Typography/Mini";
import {
  PageIntroCta,
  PageIntroHero,
  StyledPageIntro,
} from "./StyledPageIntro";

export interface PageIntroProps {
  heroHeader: string;
  withCta?: boolean;
  introPerex: string;
  figureBanner: {
    image: ImageProps;
    perex: string;
  };
  scrollFigureBanner: {
    items: { perex: string; image: ImageProps }[];
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
      <ScrollFigureBanner items={scrollFigureBanner.items} />
    </StyledPageIntro>
  );
};

export default PageIntro;

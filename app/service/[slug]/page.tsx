import { Metadata } from "next";
import { StyledService } from "./(client)/StyledService";
import { servicesData } from "./servicesData";
import PageIntro from "../../../components/PageIntro/PageIntro";

export const metadata: Metadata = {};

interface PageProps {
  params: { slug: string };
}

const page = ({ params: { slug } }: PageProps) => {
  const data = servicesData[slug];

  return (
    <StyledService>
      <PageIntro
        heroHeader={data.heroHeader}
        figureBanner={{
          perex: data.figureBanner.perex,
          image: {
            src: data.figureBanner.image.src,
            width: data.figureBanner.image.width,
            height: data.figureBanner.image.height,
            alt: data.figureBanner.image.alt,
          },
        }}
        introPerex={data.introPerex}
        scrollFigureBanner={{
          image: {
            src: data.scrollFigureBanner.image.src,
            width: data.scrollFigureBanner.image.width,
            height: data.scrollFigureBanner.image.height,
            alt: data.scrollFigureBanner.image.alt,
          },
          items: data.scrollFigureBanner.items,
        }}
      />
    </StyledService>
  );
};

export default page;

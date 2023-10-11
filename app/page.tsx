import { Metadata } from "next";
import getClient from "../apollo/client";
import Button from "../components/Button/Button";
import ClientQuote from "../components/ClientQuote/ClientQuote";
import FigureBanner from "../components/FigureBanner/FigureBanner";
import Partners from "../components/Partners/Partners";
import Services from "../components/Services/Services";
import RevealAnimation from "../components/TextAnimation/RevealAnimation";
import { Medium } from "../components/Typography/Medium";
import { Mini } from "../components/Typography/Mini";
import { Small } from "../components/Typography/Small";
import { GetProjects } from "../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../gql/types";
import {
  HpAbout,
  HpHeader,
  HpHero,
  HpHeroInner,
  HpProjectsCta,
  HpQuoteAbout,
  HpQuoteServices,
  HpQuoteW,
  StyledHomepage,
} from "./(client)/HomepageStyles";
import HpProjects from "./(client)/HpProjects";
import { homepageData } from "./(client)/homepageData";

export const metadata: Metadata = {};

export const revalidate = 10;

interface PageProps {}

const page = async ({}: PageProps) => {
  const client = getClient();

  const {
    data: { Projects },
  } = await client.query<Query>({
    query: GetProjects,
    variables: {
      limit: 3,
      where: { is_featured: true },
      coverImageFormat: "webp",
    } as QueryProjectsArgs,
  });

  return (
    <StyledHomepage>
      <HpHero>
        <RevealAnimation>
          <HpHeader>{homepageData.heroHeader}</HpHeader>
        </RevealAnimation>
        <HpHeroInner>
          <RevealAnimation delay={0.5}>
            <Mini>{homepageData.heroPerex}</Mini>
          </RevealAnimation>
          <RevealAnimation delay={1} noCrop>
            <Button>Naše služby</Button>
          </RevealAnimation>
        </HpHeroInner>
      </HpHero>
      <HpAbout>
        <FigureBanner
          src={homepageData.about.figureBanner.image.src}
          alt={homepageData.about.figureBanner.image.alt}
          width={homepageData.about.figureBanner.image.width}
          height={homepageData.about.figureBanner.image.height}>
          <Mini>{homepageData.about.figureBanner.perex}</Mini>
        </FigureBanner>
        <RevealAnimation>
          <HpQuoteAbout>
            <Medium>{homepageData.about.perex}</Medium>
          </HpQuoteAbout>
        </RevealAnimation>
      </HpAbout>
      <Services
        mainHeader={homepageData.services.mainHeader}
        list={homepageData.services.list}
      />
      <HpQuoteServices>
        <RevealAnimation>
          <Medium className='wide'>{homepageData.servicesQuote}</Medium>
        </RevealAnimation>
        <RevealAnimation delay={0.5} noCrop>
          <Button className='skinny' href={"/o-nas"}>
            O nás
          </Button>
        </RevealAnimation>
      </HpQuoteServices>
      <HpProjects projects={Projects} />
      <HpProjectsCta>
        <RevealAnimation>
          <Small className='wide'>
            Dělá nám radost se podílet na rozmanitých a inovativních projektech,
            které nerezonují jen v lokálním prostředí, ale jsou uznávanou
            inspirací na celém světě.
          </Small>
        </RevealAnimation>
        <RevealAnimation delay={0.5} noCrop>
          <Button href={"/projekty"}>Více projektů</Button>
        </RevealAnimation>
      </HpProjectsCta>
      <HpQuoteW>
        <ClientQuote
          quote={homepageData.quote.quote}
          client={homepageData.quote.client}
        />
      </HpQuoteW>
      <Partners />
    </StyledHomepage>
  );
};

export default page;

import { Metadata } from "next";
import getClient from "../apollo/client";
import Button from "../components/Button/Button";
import ClientQuote from "../components/ClientQuote/ClientQuote";
import FigureBanner from "../components/FigureBanner/FigureBanner";
import Partners from "../components/Partners/Partners";
import Services from "../components/Services/Services";
import { Medium } from "../components/Typography/Medium";
import { Mini } from "../components/Typography/Mini";
import { GetProjects } from "../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../gql/types";
import {
  HpAbout,
  HpHeader,
  HpHero,
  HpHeroInner,
  HpQuoteAbout,
  HpQuoteServices,
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
      coverImageWidth: 1000,
      coverImageHeight: 1000,
      coverImageFormat: "webp",
    } as QueryProjectsArgs,
  });

  return (
    <StyledHomepage>
      <HpHero>
        <HpHeader>{homepageData.heroHeader}</HpHeader>
        <HpHeroInner>
          <Mini>{homepageData.heroPerex}</Mini>
          <Button>Naše služby</Button>
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
        <HpQuoteAbout>
          <Medium>{homepageData.about.perex}</Medium>
        </HpQuoteAbout>
      </HpAbout>
      <Services
        mainHeader={homepageData.services.mainHeader}
        list={homepageData.services.list}
      />
      <HpQuoteServices>
        <Medium className='wide'>{homepageData.servicesQuote}</Medium>
        <Button className='skinny' href={"/o-nas"}>
          O nás
        </Button>
      </HpQuoteServices>
      <HpProjects projects={Projects} />
      <ClientQuote
        quote={homepageData.quote.quote}
        client={homepageData.quote.client}
      />
      <Partners />
    </StyledHomepage>
  );
};

export default page;

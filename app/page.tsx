import { Metadata } from "next";
import getClient from "../apollo/client";
import Button from "../components/Button/Button";
import ClientQuote from "../components/ClientQuote/ClientQuote";
import FigureBanner from "../components/FigureBanner/FigureBanner";
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
import Partners from "../components/Partners/Partners";

export const metadata: Metadata = {};

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
        <HpHeader>
          {`Budujeme udržitelnější\na spokojenější budoucnost.`}
        </HpHeader>
        <HpHeroInner>
          <Mini className=''>
            Jsme stabilním inženýrským partnerem pro architektonická studia a
            developery, poskytující technickou podporu a expertizu, odborné
            know-how a zajišťující včasné a kvalitní provedení projektu při
            dodržení kvalitního designu a optimaliazce nákladů.
          </Mini>
          <Button>Naše služby</Button>
        </HpHeroInner>
      </HpHero>
      <HpAbout>
        <FigureBanner
          src={"/imgs/hp-hero.jpg"}
          alt={"Budujeme udržitelnější a spokojenější budoucnost."}
          width={1321}
          height={846}>
          <Mini>
            Zajištujeme kompletní support pro architektonická studia a investory
            s cílem zefektivnit a zkvalitnit proces předrealizační části
            výstavby.
          </Mini>
        </FigureBanner>
        <HpQuoteAbout>
          <Medium>
            Naše komplexní sada služeb je přizpůsobena tak, aby pomohla
            architektům v každé fázi projektů.
          </Medium>
        </HpQuoteAbout>
      </HpAbout>
      <Services />
      <HpQuoteServices>
        <Medium className='wide'>
          Na každém detailu záleží. Postaráme se o to, aby naše společná cesta
          byla zcela bez komplikací a vedla k dechberoucím výsledkům.
        </Medium>
        {/* TODO add link */}
        <Button className='skinny'>O nás</Button>
      </HpQuoteServices>
      <HpProjects projects={Projects} />
      <ClientQuote
        quote={
          "“Spolupráce s Plancraft byla jednoduše bezkonkurenční. Jejich profesionální přístup a schopnost dodat vynikající výsledky překonala veškerá očekávání.”"
        }
        client={"— Radek Vašulík, Archidrip s.r.o."}
      />
      <Partners />
    </StyledHomepage>
  );
};

export default page;

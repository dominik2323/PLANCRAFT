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
      <Services
        mainHeader='Naše služby'
        list={[
          {
            header: "Projektová dokumentace",
            image: {
              src: "/imgs/projektova-dokumentace.jpg",
              width: 830,
              height: 430,
              alt: "Projektová dokumentace",
            },
            content: [
              {
                type: "text",
                text: "Naše pečlivě zpracovaná dokumentace v BIM je Vaším plánem k úspěšné realizaci stavby.\nVypracujeme projektovou dokumentaci, zajistíme souhlasná stanoviska dotčených orgánů státní správy a získáme stavební povolení.",
              },
            ],
          },
          {
            header: "Pasportizace budov",
            image: {
              src: "/imgs/projektova-dokumentace.jpg",
              width: 830,
              height: 430,
              alt: "Projektová dokumentace",
            },
            content: [
              {
                type: "text",
                text: "S hrdostí se staráme o 3D pasporty budov pro široké spektrum typologií a fází, ať už se jedná o památkově chráněné nemovitosti určené k obnově nebo novostavby, které potřebují dokumentaci skutečného stavu.\nDíky přesnému zaměření objektů včetně detailů a lokalizace problematických míst budete připraveni na cokoliv. V rámci následných konzultací vám pomůžeme navrhnout to nejlepší řešení a vhodné stavební úpravy.",
              },
            ],
          },
          {
            header: "Energetická úspornost",
            image: {
              src: "/imgs/projektova-dokumentace.jpg",
              width: 830,
              height: 430,
              alt: "Projektová dokumentace",
            },
            content: [
              {
                type: "text",
                text: "Zajišťujeme komplexní služby v oblasti energetiky s cílem pro udržitelnou výstavbu s co nejmenším negativním dopadem na životní přostředí.\nVytvoříme analýzu a navrhneme řešení, která sníží energetickou náročnost a zvýší komfort uživatelů budovy",
              },
            ],
          },
          {
            header: "Design due diligence",
            image: {
              src: "/imgs/projektova-dokumentace.jpg",
              width: 830,
              height: 430,
              alt: "Projektová dokumentace",
            },
            content: [
              {
                type: "text",
                text: "Podporujeme vize architektů prostřednictvím inovativního přístupu k projektování a životnímu cyklu budovy. Umožníme vašemu týmu vytvářet průlomové návrhy, které zanechají trvalý pozitivní dopad na kvalitu života ve městech. Společně nestavíme jen stavby, ale vytváříme odkaz pro další generace.",
              },
            ],
          },
        ]}
      />
      <HpQuoteServices>
        <Medium className='wide'>
          Na každém detailu záleží. Postaráme se o to, aby naše společná cesta
          byla zcela bez komplikací a vedla k dechberoucím výsledkům.
        </Medium>
        <Button className='skinny' href={"/o-nas"}>
          O nás
        </Button>
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

import { Metadata } from "next";
import Button from "../../components/Button/Button";
import ClientQuote from "../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../components/Divider/DividerHeader";
import FigureBanner from "../../components/FigureBanner/FigureBanner";
import NumberedList from "../../components/NumberedList/NumberedList";
import Partners from "../../components/Partners/Partners";
import { Medium } from "../../components/Typography/Medium";
import { Mini } from "../../components/Typography/Mini";
import {
  AboutTeam,
  AboutTeamClaim,
  AboutTeamClaimHeader,
  AboutTeamClaimImage,
  AboutTeamClaimInner,
  AboutTeamIntro,
  AboutValues,
  StyledAbout,
} from "./(client)/StyledAbout";
import PageIntro from "../../components/PageIntro/PageIntro";

export const metadata: Metadata = {};
export const revalidate = 10;

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <StyledAbout>
      <PageIntro
        heroHeader={
          "Projekční studio, které vám pomůže vybudovat i vaše nejsložitější vize."
        }
        figureBanner={{
          perex:
            "Jsme stabilním inženýrským partnerem pro architektonická studia a developery, poskytující technickou podporu a expertizu, odborné know-how a zajišťující včasné a kvalitní provedení projektu při dodržení kvalitního designu a optimaliazce nákladů.",
          image: {
            src: "/imgs/about-hero.jpg",
            width: 760,
            height: 1080,
            alt: "Projekční studio, které vám pomůže vybudovat i vaše nejsložitější vize.",
          },
        }}
        introPerex={
          "Místo, kde se technická odbornost snoubí s architektonickými inovacemi."
        }
        scrollFigureBanner={{
          image: {
            src: "/imgs/about-mission.jpg",
            width: 760,
            height: 1080,
            alt: "Projekční studio, které vám pomůže vybudovat i vaše nejsložitější vize.",
          },
          items: [
            "Cílíme na kvalitní zpracování komplexní projektové dokumentace ve smluveném termínu odevzdání - zakládáme si na průběžných kontrolách, koordinaci činností všech specialistů a konzultacích, abychom předešli případným změnám a kolizím v pozdních fázích projektu a zároveň dodrželi architektonický ráz navržený architektonickým studiem ",
            "Dokončení projektu včas, splnění požadavků smlouvy a dodržení rozpočtu jsou základní aspekty řízení kvality.",
            "Stavíme kvalitní stavby s funkčním horizontem 200 a více let. Našim cílem je postavit stavbu, která bude variabilní, může sloužit více využití a požadavkům a potřebám třetí, páté, desáté generace. Vše v souladu s maximální udržitelností, abychom zlepšili kvalitu života a co nejméně zatížili naši planetu.",
          ],
        }}
      />
      <AboutValues>
        <DividerHeader>
          <Mini className='uppercase'>Naše hodnoty</Mini>
        </DividerHeader>
        <NumberedList
          items={[
            {
              header: "SROZUMITELNOST A PROFESIONALITA",
              perex:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum.",
            },
            {
              header: "SPOLUPRÁCE A KONZULTACE",
              perex:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum.",
            },
            {
              header: "ADAPTACE A FLEXIBILITA",
              perex:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum.",
            },
            {
              header: "PŘEHLEDNOST A PŘESNOST VÝSTUPŮ",
              perex:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum.",
            },
            {
              header: "NEJMODERNĚJŠÍ TECHNOLOGIE",
              perex:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum ipsum. Duis condimentum augue id magna semper rutrum.",
            },
          ]}
        />
      </AboutValues>
      <AboutTeam>
        <AboutTeamIntro>
          <DividerHeader>
            <Mini className='uppercase'>Náš tým</Mini>
          </DividerHeader>
          <FigureBanner
            className='flip align-top'
            src={"/imgs/about-team.jpg"}
            width={760}
            height={1080}
            alt={"Náš tým"}>
            <Mini>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In
              rutrum. Mauris tincidunt sem sed arcu. Fusce aliquam vestibulum
              ipsum. Duis condimentum augue id magna semper rutrum. Nulla est.
              In dapibus augue non sapien.
            </Mini>
          </FigureBanner>
        </AboutTeamIntro>
        <AboutTeamClaim>
          <AboutTeamClaimHeader>
            <Medium className='wide'>
              V Plancraftu věříme, že kvalitní a důslednou prací protkanou
              inovacemi dokážeme zlepšit kvalitu života ve městech po celé
              generace.
            </Medium>
          </AboutTeamClaimHeader>
          <AboutTeamClaimInner>
            <AboutTeamClaimImage
              src={"/imgs/about-team-1.jpg"}
              width={760}
              height={480}
              alt={"Plancraft tým"}
            />
            <Button href={"/kontakt"}>{"Napište nám"}</Button>
          </AboutTeamClaimInner>
        </AboutTeamClaim>
        <ClientQuote
          quote={
            "“Spolupráce s Plancraft byla jednoduše bezkonkurenční. Jejich profesionální přístup a schopnost dodat vynikající výsledky překonala veškerá očekávání.”"
          }
          client={"— Radek Vašulík, Archidrip s.r.o."}
        />
      </AboutTeam>
      <Partners />
    </StyledAbout>
  );
};

export default page;

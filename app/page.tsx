import { Metadata } from "next";
import Button from "../components/Button/Button";
import FigureBanner from "../components/FigureBanner/FigureBanner";
import { Mini } from "../components/Typography/Mini";
import {
  HpAbout,
  HpAboutQuote,
  HpHeader,
  HpHero,
  HpHeroInner,
  StyledHomepage,
} from "./(client)/HomepageStyles";
import { Big } from "../components/Typography/Big";
import { Large } from "../components/Typography/Large";
import { Medium } from "../components/Typography/Medium";
import Elevator from "../components/Elevator/Elevator";
import { progress } from "framer-motion";
import Services from "../components/Services/Services";

export const metadata: Metadata = {};

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <StyledHomepage style={{ height: "300vh" }}>
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
        <HpAboutQuote>
          <Medium>
            Naše komplexní sada služeb je přizpůsobena tak, aby pomohla
            architektům v každé fázi projektů.
          </Medium>
        </HpAboutQuote>
      </HpAbout>
      <Services />
    </StyledHomepage>
  );
};

export default page;

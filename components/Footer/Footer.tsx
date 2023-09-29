"use client";

import { usePathname } from "next/navigation";
import Divider from "../Divider/Divider";
import Link from "../Link/Link";
import Logo from "../Svgs/Logo";
import { Medium } from "../Typography/Medium";
import { Micro } from "../Typography/Micro";
import { Mini } from "../Typography/Mini";
import {
  FooterContact,
  FooterCopywrite,
  FooterLogo,
  FooterPublicity,
  PublicityLogo,
  PublicityLogos,
  StyledFooter,
} from "./StyledFooter";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const pahtname = usePathname();
  const pageWithSimpleFooter = ["/kontakt", "/contact"];
  if (pageWithSimpleFooter.includes(pahtname)) return null;

  return (
    <StyledFooter>
      <Divider fill='white' />
      <FooterContact>
        <Mini className='white'>
          Hledáte pomoc s vaším projektem? Nabízíme konzultace, rady a návrhy
          pro optimální řešení. Kontaktujte nás a společně postavíme váš projekt
          na pevné základy.
        </Mini>
        <div>
          <Link href={"tel: +420732870325"}>
            <Medium className='white'>+420 732 870 325</Medium>
          </Link>
          <Link href={"mailto:info@plancraft.eu"}>
            <Medium className='white'>info@plancraft.eu</Medium>
          </Link>
        </div>
        <Mini className='break-lines white'>
          {`Plancraft s.r.o.\nIČO: 10856587\nBratislavská 206/21,\nZábrdovice, 602 00 Brno`}
        </Mini>
      </FooterContact>
      <Divider fill='white' hidePlus />
      <FooterLogo>
        <Logo fill='white' />
      </FooterLogo>
      <Divider fill='white' hidePlus />
      <FooterCopywrite>
        <Mini className='white'>2023 PLANCRAFT</Mini>
        <Mini className='white'>
          Made with Style & Ease by{" "}
          <Link
            noArrow
            className='underline inline'
            href={"https://steezy.studio"}
            target={"_blank"}>
            steezy.studio
          </Link>
        </Mini>
      </FooterCopywrite>
      <Divider fill='white' />
      <FooterPublicity>
        <Micro className='primary300'>
          V roce 2023 dochází k čerpání dotace z Výzvy č. 0383 - Kreativní
          vouchery v rámci Národního plánu obnovy - iniciativa Kreativní
          vouchery komponenty 4.5 Rozvoj kulturního a kreativního sektoru s
          názvem: Plancraft_Kreativní voucher. Projekt je realizován za finanční
          spoluúčasti Evropské unie prostřednictvím Národního plánu obnovy a
          Ministerstva kultury České republiky.
        </Micro>
        <PublicityLogos>
          <PublicityLogo src={"/imgs/financovano-eu.svg"} />
          <PublicityLogo src={"/imgs/narodni-plan-obnovy.svg"} />
          <PublicityLogo src={"/imgs/ministrstvo-kultury.svg"} />
        </PublicityLogos>
      </FooterPublicity>
    </StyledFooter>
  );
};

export default Footer;

"use client";

import Cabinet from "../Cabinet/Cabinet";
import Divider from "../Divider/Divider";
import Link from "../Link/Link";
import { Mini } from "../Typography/Mini";
import { Small } from "../Typography/Small";
import {
  ServiceCoverWrapperInner,
  Numbering,
  ServiceContent,
  ServiceCover,
  ServiceContentRight,
  ServiceHeader,
  ServiceHeaderContent,
  StyledServices,
  ServiceContentLeft,
  ServicesCabinetHeaderWrapper,
  ServicesCabinetFooterWrapper,
} from "./StyledServices";

interface ServicesProps {}

const intervals = [
  [0, 0.25],
  [0.25, 0.5],
  [0.5, 0.75],
  [0.75, 1],
];

const services = [
  {
    header: "PROJEKTOVÁ DOKUMENTACE",
    perex:
      "Naše pečlivě zpracovaná dokumentace v BIM je Vaším plánem k úspěšné realizaci stavby.\nVypracujeme projektovou dokumentaci, zajistíme souhlasná stanoviska dotčených orgánů státní správy a získáme stavební povolení.",
  },
  {
    header: "PASPORTIZACE BUDOV",
    perex:
      "S hrdostí se staráme o 3D pasporty budov pro široké spektrum typologií a fází, ať už se jedná o památkově chráněné nemovitosti určené k obnově nebo novostavby, které potřebují dokumentaci skutečného stavu.\nDíky přesnému zaměření objektů včetně detailů a lokalizace problematických míst budete připraveni na cokoliv. V rámci následných konzultací vám pomůžeme navrhnout to nejlepší řešení a vhodné stavební úpravy.",
  },
  {
    header: "ENERGETICKÁ ÚSPORNOST",
    perex:
      "Zajišťujeme komplexní služby v oblasti energetiky s cílem pro udržitelnou výstavbu s co nejmenším negativním dopadem na životní přostředí.\nVytvoříme analýzu a navrhneme řešení, která sníží energetickou náročnost a zvýší komfort uživatelů budovy",
  },
  {
    header: "DESIGN DUE DILIGENCE",
    perex:
      "Podporujeme vize architektů prostřednictvím inovativního přístupu k projektování a životnímu cyklu budovy. Umožníme vašemu týmu vytvářet průlomové návrhy, které zanechají trvalý pozitivní dopad na kvalitu života ve městech. Společně nestavíme jen stavby, ale vytváříme odkaz pro další generace.",
  },
];

const Services = ({}: ServicesProps) => {
  return (
    <StyledServices>
      <Cabinet
        header={
          <ServicesCabinetHeaderWrapper>
            <Mini className='uppercase'>Naše služby</Mini>
          </ServicesCabinetHeaderWrapper>
        }
        cards={services.map(({ header, perex }, i) => [
          <ServiceHeader>
            <Divider hidePlus={0 !== i} />
            <ServiceHeaderContent>
              <Numbering>
                <Small>{`0${i + 1}`}</Small>
              </Numbering>
              <Small>{header}</Small>
            </ServiceHeaderContent>
          </ServiceHeader>,
          <ServiceContent>
            <ServiceContentLeft>
              <Mini>{perex}</Mini>
              {/* TODO add link */}
              <Link href={""}>
                <Mini>{"Zjistit více"}</Mini>
              </Link>
            </ServiceContentLeft>
            <ServiceContentRight>
              <ServiceCoverWrapperInner>
                {/* TODO add images */}
                <ServiceCover
                  src={"/imgs/projektova-dokumentace.jpg"}
                  alt={"header"}
                />
              </ServiceCoverWrapperInner>
            </ServiceContentRight>
          </ServiceContent>,
        ])}
        footer={
          <ServicesCabinetFooterWrapper>
            <Divider />
          </ServicesCabinetFooterWrapper>
        }
      />
    </StyledServices>
  );
};

export default Services;

{
  /* <StyledServices>
<Elevator scrollHeight='200vh'>
  {({ progress }) => (
    <ServicesViewport>
      <ServicesSectionHeaderWrapper>
        <Mini className='uppercase'>Naše služby</Mini>
      </ServicesSectionHeaderWrapper>
      <Divider />
      <ServicesList>
        {services.map(({ header, perex }, i) => {
          const interval = intervals[i];
          const isActive =
            interval[0] <= progress && interval[1] >= progress;

          return (
            <Fragment key={i}>
              {0 !== i && <Divider hidePlus />}
              <ServiceHeader>
                <Numbering>
                  <Small>{`0${i + 1}`}</Small>
                </Numbering>
                <Small>{header}</Small>
              </ServiceHeader>
              <AnimatePresence>
                {isActive && (
                  <ServiceContent
                    key={i}
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    exit={{ height: "0%" }}
                    transition={{ ease: easing, duration: 0.7 }}>
                    <ServiceContentContent>
                      <Mini>{perex}</Mini>
                      {/* TODO add links */
}
{
  /*
                      <Link href={""}>
                        <Mini>fdkl</Mini>
                      </Link>
                    </ServiceContentContent>
                    <ServiceCoverWrapper>
                      <Inner>
                        <ServiceCover
                          src={"/imgs/projektova-dokumentace.jpg"}
                          alt={"header"}
                        />
                      </Inner>
                    </ServiceCoverWrapper>
                  </ServiceContent>
                )}
              </AnimatePresence>
            </Fragment>
          );
        })}
      </ServicesList>
      <Divider />
    </ServicesViewport>
  )}
</Elevator>
</StyledServices> */
}

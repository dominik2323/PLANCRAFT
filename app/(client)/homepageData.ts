import { Cabinet } from "../service/[slug]/servicesData";

export const homepageData = {
  heroHeader: "Budujeme udržitelnější\na spokojenější budoucnost.",
  heroPerex:
    "Jsme stabilním inženýrským partnerem pro architektonická studia a developery, poskytující technickou podporu a expertizu, odborné know-how a zajišťující včasné a kvalitní provedení projektu při dodržení kvalitního designu a optimaliazce nákladů.",
  about: {
    figureBanner: {
      perex:
        "Zajištujeme kompletní support pro architektonická studia a investory s cílem zefektivnit a zkvalitnit proces předrealizační části výstavby.",
      image: {
        src: "/imgs/hp-hero.jpg",
        width: 1321,
        height: 846,
        alt: "Budujeme udržitelnější a spokojenější budoucnost.",
      },
    },
    perex:
      "Naše komplexní sada služeb je přizpůsobena tak, aby pomohla architektům v každé fázi projektů.",
  },
  services: [
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
  ] as Cabinet["list"],
  servicesQuote:
    "Na každém detailu záleží. Postaráme se o to, aby naše společná cesta byla zcela bez komplikací a vedla k dechberoucím výsledkům.",
  quote: {
    quote:
      "“Spolupráce s Plancraft byla jednoduše bezkonkurenční. Jejich profesionální přístup a schopnost dodat vynikající výsledky překonala veškerá očekávání.”",
    client: "Radek Vašulík, Archidrip s.r.o.",
  },
};

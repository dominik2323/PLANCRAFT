import { PageIntroProps } from "../../../components/PageIntro/PageIntro";

type PageData = PageIntroProps & {};

type ServicesData = {
  [key: string]: PageData;
};

export const servicesData: ServicesData = {
  "projektova-dokumentace": {
    heroHeader:
      "Naše pečlivě zpracovaná dokumentace v BIM je Vaším plánem k úspěšné realizaci stavby",
    figureBanner: {
      perex:
        'Víme, že ďábel se skrývá v detailech. A proto zajistíme, že bude vyřešen každý milimetr stavby. Už žádné "red flags", jen kvalita a preciznost.',
      image: {
        src: "/imgs/service-projektova-dokumentace.jpg",
        width: 1070,
        height: 615,
        alt: "Projektová dokumentace",
      },
    },
    introPerex:
      "S naší odborností v zaměřování a 3D modelování vytváříme detailní a komplexní digitální podklady pro tvorbu vašich architektonických studií a zhmotnění vašich vizí.",
    scrollFigureBanner: {
      image: {
        src: "/imgs/service-projektova-dokumentace-scroll-figure-banner.jpg",
        width: 960,
        height: 560,
        alt: "Projektová dokumentace",
      },
      items: [
        "Naše služby zahrnují analýzu vašeho projektu, vypracování potřebné dokumentace a aktivní komunikaci s příslušnými úřady.",
        "BIM řešení poskytuje komplexní přehled o vašem projektu, od počátečního návrhu po dlouhodobou správu. S BIMem dosahujeme maximální efektivity, minimalizujeme chyby a zajišťujeme lepší spolupráci mezi všemi účastníky projektu.",
        "S dotčenými orgány státní správy aktivně komunikujeme již v průběhu projekčních prací, tím zrychlujeme celý proces a předcházíme změnám a námitkám v pozdní fázi projektu. Díky nám se tedy vyhnete zdlouhavým byrokratickým procesům a budete moci rychle přejít ke stavbě vašich snů.",
      ],
    },
  },
  pasportizace: {
    heroHeader:
      "Nejlepší přítel architekta v přesném zaměření, pasportizaci a digitalizaci staveb",
    figureBanner: {
      perex:
        "S hrdostí se staráme o 3D pasporty budov pro široké spektrum typologií a fází, ať už se jedná o památkově chráněné nemovitosti určené k obnově nebo novostavby, které potřebují dokumentaci skutečného stavu.",
      image: {
        src: "/imgs/service-pasportizace.jpg",
        width: 1070,
        height: 615,
        alt: "Pasportizace",
      },
    },
    introPerex:
      "S naší odborností v zaměřování a 3D modelování vytváříme detailní a komplexní digitální podklady pro tvorbu vašich architektonických studií a zhmotnění vašich vizí.",
    scrollFigureBanner: {
      image: {
        src: "/imgs/service-pasportizace-scroll-figure-banner.jpg",
        width: 960,
        height: 560,
        alt: "Pasportizace",
      },
      items: [
        "Jsme zde, abychom vám poskytli kvalitní pasporty budov a detailní 3D digitalizaci, které budou technicky vysoce přesné a budou kompetně odpovídat vašim požadavkům.",
        "Díky přesnému zaměření objektů včetně detailů a lokalizace problematických míst budete připraveni na cokoliv. V rámci následných konzultací vám pomůžeme navrhnout to nejlepší řešení a vhodné stavební úpravy.",
        "Nejenže zakreslíme stávající stav a identifikujeme problémy, ale zapojíme se do vaší vize a zajistíme kvalitní podklad pro Váš stavební záměr a architektonickou vizi.",
      ],
    },
  },
  "energeticka-uspornost": {
    heroHeader: "Úsporné energetické řešení staveb od konceptu až po provoz",
    figureBanner: {
      perex:
        "Zajišťujeme komplexní služby v oblasti energetiky s cílem pro udržitelnou výstavbu s co nejmenším negativním dopadem na životní přostředí a s co nejefektivnějším využitím zdrojů.",
      image: {
        src: "/imgs/service-energeticka-uspornost.jpg",
        width: 1070,
        height: 615,
        alt: "Pasportizace",
      },
    },
    introPerex:
      "Nabijeme váš projekt pozitivní energií od konceptu až po detaily.",
    scrollFigureBanner: {
      image: {
        src: "/imgs/service-energeticka-uspornost-scroll-figure-banner.jpg",
        width: 960,
        height: 560,
        alt: "Energetická úspornost",
      },
      items: [
        "Hledáme a navrhujeme ty nejzajímavější a nejoptimálnější řešení pro jakýkoliv typ projektu. Přinášíme nejmodernější energetické řešení pro zlepšení kvality života ve městech.",
        "Řešení energetiky je sice nezbytná záležitost, ale také ideální příležitost pro to, vymyslet řešení, které bude nejen úsporné, ale i udržitelné  po celé generace.",
        "Dokážeme se adaptovat na jakýkoliv řešený problém, v kterékoliv fázi projektu. Nabízíme komplexní odborné služby, od samotného konceptu po finální analýzy a posudky.",
      ],
    },
  },
  "design-due-diligence": {
    heroHeader:
      "Podpora vize architektů inovativním přístupem k projektování a životnímu cyklu budovy.",
    figureBanner: {
      perex:
        "Kromě toho, že jsme Vaším partnerem v procesu, pomáháme navigovat při přípravě, schvalování a povolování složitých projektů. Zapojujeme se do všech fází projektu a nabízíme podporu při získávání autorizací a povolovacích dokumentů i při správě stavby.",
      image: {
        src: "/imgs/service-design.jpg",
        width: 1070,
        height: 615,
        alt: "Design due diligence",
      },
    },
    introPerex:
      "Umožníme vašemu týmu vytvářet průlomové návrhy, které zanechají trvalý pozitivní dopad na kvalitu života ve městech.",
    scrollFigureBanner: {
      image: {
        src: "/imgs/service-energeticka-uspornost-scroll-figure-banner.jpg",
        width: 960,
        height: 560,
        alt: "Energetická úspornost",
      },
      items: [
        "Hledáme a navrhujeme ty nejzajímavější a nejoptimálnější řešení pro jakýkoliv typ projektu. Přinášíme nejmodernější energetické řešení pro zlepšení kvality života ve městech.",
        "Řešení energetiky je sice nezbytná záležitost, ale také ideální příležitost pro to, vymyslet řešení, které bude nejen úsporné, ale i udržitelné  po celé generace.",
        "Dokážeme se adaptovat na jakýkoliv řešený problém, v kterékoliv fázi projektu. Nabízíme komplexní odborné služby, od samotného konceptu po finální analýzy a posudky.",
      ],
    },
  },
};

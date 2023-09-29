import Link from "../../../components/Link/Link";

export const contactData = {
  header: "Společně změníme vaše vize ve skutečnost",
  contactCover: {
    src: "/imgs/contact-cover.jpg",
    alt: "Společně změníme vaše vize ve skutečnost",
    width: 840,
    height: 600,
  },

  items: [
    {
      header: "Telefon",
      body: (
        <Link href={"tel:+420774987654"} className='underline' noArrow>
          +420 774 987 654
        </Link>
      ),
    },
    {
      header: "Email",
      body: (
        <Link href={"mailto:info@plancraft.cz"} className='underline' noArrow>
          info@plancraft.cz
        </Link>
      ),
    },
    { header: "Firma", body: "Plancraft s.r.o." },
    { header: "IČO", body: "10856587" },
    {
      header: "Adresa",
      body: "Bratislavská 206/21,\nZábrdovice, 602 00 Brno ",
    },
  ],
};

import { Metadata } from "next";
import SimpleFooter from "../../components/SimpleFooter/SimpleFooter";
import Table from "../../components/Table/Table";
import { Medium } from "../../components/Typography/Medium";
import {
  ContactContent,
  ContactCover,
  ContactHero,
  StyledContact,
} from "./(clinet)/StyledContact";
import Link from "../../components/Link/Link";

export const metadata: Metadata = {};

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <StyledContact>
      <ContactHero>
        <ContactContent>
          <Medium>Let's create exceptional designs together!</Medium>
          <Table
            items={[
              {
                header: "Telefon",
                body: (
                  <Link
                    href={"tel:+420774987654"}
                    className='underline'
                    noArrow>
                    +420 774 987 654
                  </Link>
                ),
              },
              {
                header: "Email",
                body: (
                  <Link
                    href={"mailto:info@plancraft.cz"}
                    className='underline'
                    noArrow>
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
            ]}
          />
        </ContactContent>
        <ContactCover
          src={`/imgs/contact-cover.jpg`}
          width={840}
          height={600}
          alt={"Let's create exceptional designs together!"}
        />
      </ContactHero>
      <SimpleFooter />
    </StyledContact>
  );
};

export default page;

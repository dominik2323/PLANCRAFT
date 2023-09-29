import { Metadata } from "next";
import SimpleFooter from "../../components/SimpleFooter/SimpleFooter";
import Table from "../../components/Table/Table";
import { Medium } from "../../components/Typography/Medium";
import { contactData } from "./(client)/contactData";
import {
  ContactContent,
  ContactCover,
  ContactHero,
  StyledContact,
} from "./(clinet)/StyledContact";

export const metadata: Metadata = {};
export const revalidate = 10;

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <StyledContact>
      <ContactHero>
        <ContactContent>
          <Medium>{contactData.header}</Medium>
          <Table items={contactData.items} />
        </ContactContent>
        <ContactCover
          src={contactData.contactCover.src}
          width={contactData.contactCover.width}
          height={contactData.contactCover.height}
          alt={contactData.contactCover.alt}
        />
      </ContactHero>
      <SimpleFooter />
    </StyledContact>
  );
};

export default page;

"use client";

import DividerHeader from "../Divider/DividerHeader";
import { Mini } from "../Typography/Mini";
import { PartnersList, PartnersLogo, StyledPartners } from "./StyledPartners";

interface PartnersProps {}

const list = [
  {
    name: "KOGAA",
    filename: "kogaa.svg",
  },
  {
    name: "AIA",
    filename: "aia.svg",
  },
  {
    name: "Schmidt Hammer Lassen",
    filename: "shl.svg",
  },
  {
    name: "Urbania",
    filename: "urbania.svg",
  },
];

const Partners = ({}: PartnersProps) => {
  return (
    <StyledPartners>
      <DividerHeader>
        <Mini className='uppercase'>Partneři</Mini>
      </DividerHeader>
      <PartnersList>
        {list.map(({ name, filename }, i) => (
          <PartnersLogo src={`/imgs/${filename}`} alt={name} key={i} />
        ))}
      </PartnersList>
    </StyledPartners>
  );
};

export default Partners;

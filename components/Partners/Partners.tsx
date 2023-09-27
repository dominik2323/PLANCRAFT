"use client";

import React from "react";
import { PartnersList, PartnersLogo, StyledPartners } from "./StyledPartners";
import DividerHeader from "../Divider/DividerHeader";
import { Small } from "../Typography/Small";

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
        <Small className='uppercase'>Partneři</Small>
      </DividerHeader>
      <PartnersList>
        {list.map(({ name, filename }, i) => (
          <PartnersLogo src={`imgs/${filename}`} alt={name} key={i} />
        ))}
      </PartnersList>
    </StyledPartners>
  );
};

export default Partners;

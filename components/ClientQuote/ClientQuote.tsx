"use client";

import { Large } from "../Typography/Large";
import { Mini } from "../Typography/Mini";
import { StyledClientQuote } from "./StyledClientQuote";

interface ClientQuoteProps {
  quote: string;
  client: string;
}

const ClientQuote = ({ quote, client }: ClientQuoteProps) => {
  return (
    <StyledClientQuote>
      <Large className='wide'>{quote}</Large>
      <Mini>{client}</Mini>
    </StyledClientQuote>
  );
};

export default ClientQuote;

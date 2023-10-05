"use client";

import { Mini } from "../Typography/Mini";
import { Quote, StyledClientQuote } from "./StyledClientQuote";

interface ClientQuoteProps {
  quote: string;
  client: string;
}

const ClientQuote = ({ quote, client }: ClientQuoteProps) => {
  return (
    <StyledClientQuote>
      <Quote>{quote}</Quote>
      <Mini>— {client}</Mini>
    </StyledClientQuote>
  );
};

export default ClientQuote;

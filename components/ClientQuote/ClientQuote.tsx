"use client";

import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Mini } from "../Typography/Mini";
import { Quote, StyledClientQuote } from "./StyledClientQuote";

interface ClientQuoteProps {
  quote: string;
  client: string;
}

const ClientQuote = ({ quote, client }: ClientQuoteProps) => {
  return (
    <StyledClientQuote>
      <RevealAnimation>
        <Quote>{quote}</Quote>
      </RevealAnimation>
      <RevealAnimation delay={1}>
        <Mini>— {client}</Mini>
      </RevealAnimation>
    </StyledClientQuote>
  );
};

export default ClientQuote;

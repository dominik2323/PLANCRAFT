"use client";

import styled from "styled-components";
import { Large } from "../Typography/Large";
import { Mini } from "../Typography/Mini";
import { Medium } from "../Typography/Medium";
import { Big } from "../Typography/Big";

interface ClientQuoteProps {
  quote: string;
  client: string;
}

const StyledClientQuote = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  margin: ${({ theme }) => 3 * theme.gapSize}px 0;
  margin-left: ${({ theme }) => 0.2 * theme.columnCount * theme.gapSize}px;
`;

const ClientQuote = ({ quote, client }: ClientQuoteProps) => {
  return (
    <StyledClientQuote>
      <Large className='wide'>{quote}</Large>
      <Mini>{client}</Mini>
    </StyledClientQuote>
  );
};

export default ClientQuote;

"use client";

import React from "react";
import {
  NumItemHeader,
  NumItemIndex,
  NumItemPerex,
  StyledNumberedItem,
} from "./StyledNumberedItem";
import { Small } from "../Typography/Small";
import { Mini } from "../Typography/Mini";

interface NumberedItemProps {
  header: string;
  index: number;
  perex: string;
}

const NumberedItem = ({ header, index, perex }: NumberedItemProps) => {
  return (
    <StyledNumberedItem>
      <NumItemIndex>
        <Small className='uppercase'>
          {index > 9 ? `${index + 1}` : `0${index + 1}`}
        </Small>
      </NumItemIndex>
      <NumItemHeader>
        <Small className='uppercase'>{header}</Small>
      </NumItemHeader>
      <NumItemPerex>
        <Mini>{perex}</Mini>
      </NumItemPerex>
    </StyledNumberedItem>
  );
};

export default NumberedItem;

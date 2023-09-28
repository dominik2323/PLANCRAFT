"use client";

import React from "react";
import { StyledNumberedList } from "./StyledNumberedList";
import NumberedItem from "./NumberedItem";

interface NumberedListProps {
  items: { header: string; perex: string }[];
}

const NumberedList = ({ items }: NumberedListProps) => {
  return (
    <StyledNumberedList>
      {items.map(({ header, perex }, i) => (
        <NumberedItem key={i} header={header} perex={perex} index={i} />
      ))}
    </StyledNumberedList>
  );
};

export default NumberedList;

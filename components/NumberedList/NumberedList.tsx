"use client";

import RevealAnimation from "../TextAnimation/RevealAnimation";
import NumberedItem from "./NumberedItem";
import { StyledNumberedList } from "./StyledNumberedList";

interface NumberedListProps {
  items: { header: string; perex: string }[];
}

const NumberedList = ({ items }: NumberedListProps) => {
  return (
    <StyledNumberedList>
      {items.map(({ header, perex }, i) => (
        <RevealAnimation key={i} delay={i * 0.5}>
          <NumberedItem header={header} perex={perex} index={i} />
        </RevealAnimation>
      ))}
    </StyledNumberedList>
  );
};

export default NumberedList;

"use client";

import { ColorKeys } from "../../consts/colors";
import Plus from "../Svgs/Plus";
import { DividerLine, PlusWrapper, StyledDivider } from "./StyledDivider";

interface DividerProps {
  fill?: ColorKeys;
  hidePlus?: boolean;
}

const Divider = ({ fill = "primary400", hidePlus = false }: DividerProps) => {
  return (
    <StyledDivider>
      {!hidePlus && (
        <PlusWrapper className='left'>
          <Plus stroke={fill} />
        </PlusWrapper>
      )}
      <DividerLine color={fill} />
      {!hidePlus && (
        <PlusWrapper className='right'>
          <Plus stroke={fill} />
        </PlusWrapper>
      )}
    </StyledDivider>
  );
};

export default Divider;

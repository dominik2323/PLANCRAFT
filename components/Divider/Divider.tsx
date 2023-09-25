"use client";

import { ColorKeys } from "../../consts/colors";
import Plus from "../Svgs/Plus";
import { DividerLine, StyledDivider } from "./StyledDivider";

interface DividerProps {
  fill?: ColorKeys;
  hidePlus?: boolean;
}

const Divider = ({ fill = "primary400", hidePlus = false }: DividerProps) => {
  return (
    <StyledDivider>
      {!hidePlus && <Plus />}
      <DividerLine color={fill} />
      {!hidePlus && <Plus />}
    </StyledDivider>
  );
};

export default Divider;

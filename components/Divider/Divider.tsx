"use client";

import { easing } from "../../consts/animationConfig";
import { ColorKeys } from "../../consts/colors";
import Plus from "../Svgs/Plus";
import { DividerLine, PlusWrapper, StyledDivider } from "./StyledDivider";

interface DividerProps {
  fill?: ColorKeys;
  hidePlus?: boolean;
  animate?: boolean | "inView";
}

const Divider = ({
  fill = "primary400",
  hidePlus = false,
  animate = "inView",
}: DividerProps) => {
  return (
    <StyledDivider className={hidePlus ? "hide-plus" : ""}>
      {!hidePlus && (
        <PlusWrapper className='left'>
          <Plus stroke={fill} />
        </PlusWrapper>
      )}
      <DividerLine
        color={fill}
        initial={"hidden"}
        whileInView={animate === "inView" ? "visible" : undefined}
        viewport={{ once: true }}
        animate={animate !== "inView" && animate ? "visible" : "hidden"}
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ ease: easing, duration: 3 }}
      />
      {!hidePlus && (
        <PlusWrapper className='right'>
          <Plus stroke={fill} />
        </PlusWrapper>
      )}
    </StyledDivider>
  );
};

export default Divider;

"use client";

import { useEffect } from "react";
import { useTheme } from "styled-components";
import { ColorKeys, colors } from "../../consts/colors";
import { StyledPlus } from "./Styles/StyledPlus";

interface PlusProps {
  stroke?: ColorKeys;
  width?: number;
}

const Plus = ({ stroke = "primary400", width = 21 }: PlusProps) => {
  const { plusSize, setPlusSize } = useTheme();

  useEffect(() => {
    setPlusSize(width);
  }, [width]);

  return (
    <StyledPlus
      width={plusSize}
      height={plusSize}
      viewBox={`0 0 ${plusSize} ${plusSize}`}
      stroke={colors[stroke]}
      strokeWidth={1}>
      <g>
        <line x1={0} x2={plusSize} y1={plusSize / 2} y2={plusSize / 2} />
        <line x1={plusSize / 2} x2={plusSize / 2} y1={0} y2={plusSize} />
      </g>
    </StyledPlus>
  );
};

export default Plus;

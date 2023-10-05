"use client";

import { useLayoutEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { createArray } from "../../helpers/createArray";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Dot, StyledBackgroundGrid } from "./StyledBackgroundGrid";

interface BackgroundGridProps {}

const BackgroundGrid = ({}: BackgroundGridProps) => {
  const ref = useRef<SVGSVGElement>(null);
  const { h, w } = useWindowSize();
  const { gapSize, setGapSize, setColumnCount, dotSize } = useTheme();

  const columnsCount = 40;
  const rowsCount = Math.ceil(h / gapSize);

  useLayoutEffect(() => {
    const gapSize = w / columnsCount || 1;
    setColumnCount(columnsCount);
    setGapSize(gapSize);
  }, [w, h]);

  return (
    <StyledBackgroundGrid
      ref={ref}
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}>
      <defs>
        <linearGradient id='grad' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor='white' stopOpacity='0' />
          <stop offset='100%' stopColor='white' />
        </linearGradient>
      </defs>
      {createArray(rowsCount - 1).map((l) => (
        <g key={l}>
          {createArray(columnsCount - 1).map((i) => (
            <Dot
              key={i}
              width={dotSize}
              height={dotSize}
              x={gapSize + i * gapSize}
              y={gapSize + l * gapSize}
            />
          ))}
        </g>
      ))}
      <rect
        width={w}
        height={5 * gapSize}
        y={h - 5 * gapSize}
        x={0}
        fill={"url(#grad)"}
      />
    </StyledBackgroundGrid>
  );
};

export default BackgroundGrid;

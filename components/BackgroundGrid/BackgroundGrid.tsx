"use client";

import { useEffect, useRef } from "react";
import { rgbaColors } from "../../consts/colors";
import { getCssVar } from "../../helpers/getCssVar";
import { StyledBackgroundGrid } from "./StyledBackgroundGrid";

interface BackgroundGridProps {}

function drawDot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  o: number
) {
  ctx.beginPath();
  ctx.fillStyle = rgbaColors(o).primary400;
  ctx.fillRect(x, y, size, size);
  ctx.fill();
}

const BackgroundGrid = ({}: BackgroundGridProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const drawGrid = () => {
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      const ctx = canvas.current.getContext("2d");

      const dotSize = getCssVar("--dot-size");
      const columnCount = getCssVar("--column-count");
      const columnSize = window.innerWidth / columnCount;
      const rowCount = Math.floor(window.innerHeight / columnSize);

      for (let i = 1; i < columnCount; i++) {
        for (let j = 1; j <= rowCount; j++) {
          const x = columnSize * i;
          const y = columnSize * j;
          const o = Math.pow(1 - j / rowCount, 1 / 2);
          drawDot(ctx, x, y, dotSize, o);
        }
      }
    };
    drawGrid();
    addEventListener("resize", drawGrid);
    return () => {
      removeEventListener("resize", drawGrid);
    };
  }, []);

  return <StyledBackgroundGrid ref={canvas} />;
};

export default BackgroundGrid;

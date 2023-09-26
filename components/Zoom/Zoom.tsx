"use client";

import { ReactNode } from "react";
import Elevator from "../Elevator/Elevator";
import { StyledZoom, ZoomItem, ZoomViewport } from "./StyledZoom";

interface ZoomProps {
  items: ((progress: number) => ReactNode)[];
}

const Zoom = ({ items }: ZoomProps) => {
  const maxHeight = 0.7;
  const minHeight = (1 - maxHeight) / 2;

  const calcHeight = (progress) =>
    minHeight * 100 + progress * (maxHeight - minHeight) * 100;

  const engines = [
    (progress) => Math.max(-2 * progress + 1, 0),
    (progress) => (progress <= 0.5 ? 2 * progress : -2 * progress + 2),
    (progress) => Math.max(2 * progress - 1, 0),
  ];

  return (
    <StyledZoom>
      <Elevator scrollHeight='300vh'>
        {({ progress }) => (
          <ZoomViewport>
            <ZoomItem
              style={{
                height: `${calcHeight(engines[0](progress))}%`,
                maxHeight: `${maxHeight * 100}vh`,
              }}>
              {items[0](engines[0](progress))}
            </ZoomItem>
            <ZoomItem
              style={{
                height: `${calcHeight(engines[1](progress))}%`,
                maxHeight: `${maxHeight * 100}vh`,
              }}>
              {items[1](engines[1](progress))}
            </ZoomItem>
            <ZoomItem
              style={{
                height: `${calcHeight(engines[2](progress))}%`,
                maxHeight: `${maxHeight * 100}vh`,
              }}>
              {items[2](engines[2](progress))}
            </ZoomItem>
          </ZoomViewport>
        )}
      </Elevator>
    </StyledZoom>
  );
};

export default Zoom;

"use client";

import { AnimatePresence } from "framer-motion";
import { Fragment, ReactNode } from "react";
import { createArray } from "../../helpers/createArray";
import Elevator from "../Elevator/Elevator";
import {
  CabinetFooter,
  CabinetHeader,
  CabinetItemContent,
  CabinetItemHeader,
  CabinetItems,
  CabinetViewport,
  StyledCabinet,
} from "./StyledCabinet";
import { easing } from "../../consts/animationConfig";

interface CabinetProps {
  cards: ReactNode[][];
  header?: ReactNode;
  footer?: ReactNode;
}

const createIntervals = (count) => {
  const loopArray = createArray(count);
  const increment = 1 / count;
  return loopArray.map((i) => {
    return [i * increment, (i + 1) * increment];
  });
};

const Cabinet = ({ cards, header, footer }: CabinetProps) => {
  const intervals = createIntervals(cards.length);

  return (
    <StyledCabinet>
      <Elevator scrollHeight={"200vh"}>
        {({ progress }) => {
          return (
            <>
              <CabinetViewport>
                {header && <CabinetHeader>{header}</CabinetHeader>}
                <CabinetItems>
                  {cards?.map((c, i) => {
                    const interval = intervals[i];
                    const isActive =
                      interval[0] <= progress && interval[1] >= progress;

                    return (
                      <Fragment key={i}>
                        <CabinetItemHeader>{c[0]}</CabinetItemHeader>
                        <AnimatePresence mode='wait'>
                          {isActive && (
                            <CabinetItemContent
                              key={i}
                              initial={{ height: "0%" }}
                              animate={{ height: "100%" }}
                              exit={{ height: "0%" }}
                              transition={{ ease: easing, duration: 1 }}>
                              {c[1]}
                            </CabinetItemContent>
                          )}
                        </AnimatePresence>
                      </Fragment>
                    );
                  })}
                </CabinetItems>
                {footer && <CabinetFooter>{footer}</CabinetFooter>}
              </CabinetViewport>
            </>
          );
        }}
      </Elevator>
    </StyledCabinet>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Cabinet;

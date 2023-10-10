"use client";

import { AnimatePresence } from "framer-motion";
import { Fragment, ReactNode } from "react";
import { easing } from "../../consts/animationConfig";
import { createArray } from "../../helpers/createArray";
import Elevator from "../Elevator/Elevator";
import {
  CabinetFooter,
  CabinetHeader,
  CabinetItemContent,
  CabinetItemContentInner,
  CabinetItemHeader,
  CabinetItems,
  CabinetViewport,
  StyledCabinet,
} from "./StyledCabinet";

interface CabinetProps {
  cards: ReactNode[][];
  header?: ReactNode;
  footer?: ReactNode;
  disable?: boolean;
}

const createIntervals = (count) => {
  const loopArray = createArray(count);
  const increment = 1 / count;
  return loopArray.map((i) => {
    return [i * increment, (i + 1) * increment];
  });
};

const Cabinet = ({ cards, header, footer, disable }: CabinetProps) => {
  const intervals = createIntervals(cards.length);

  return disable ? (
    <Fragment>
      {header}
      {cards.map((c, i) => (
        <Fragment key={i}>{c}</Fragment>
      ))}
    </Fragment>
  ) : (
    <StyledCabinet>
      <Elevator scrollHeight={`${cards.length * 100}dvh`}>
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
                      <Fragment key={`${i}-cabinet`}>
                        <CabinetItemHeader>{c[0]}</CabinetItemHeader>
                        <AnimatePresence mode='wait'>
                          {isActive && (
                            <CabinetItemContent
                              initial={{ opacity: 0, height: "0%" }}
                              animate={{ opacity: 1, height: "100%" }}
                              exit={{ opacity: 0, height: "0%" }}
                              transition={{ ease: easing, duration: 1.3 }}>
                              <CabinetItemContentInner>
                                {c[1]}
                              </CabinetItemContentInner>
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

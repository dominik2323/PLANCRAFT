"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Divider from "../Divider/Divider";
import Logo from "../Svgs/Logo";
import { LoaderInner, StyledLoader } from "./StyledLoader";
import { DisableScroll } from "../DisableScroll/DisableScroll";

interface LoaderProps {}

const Loader = ({}: LoaderProps) => {
  const [isLayoutReady, setisLayoutReady] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {!isLayoutReady && (
        <>
          <DisableScroll />
          <StyledLoader
            initial={"loading"}
            animate={"loading"}
            exit={"finished"}
            variants={{
              loading: { opacity: 1 },
              finished: { opacity: 0 },
            }}>
            <LoaderInner>
              <Divider animate={"inView"} fill='white' duration={2} />
              <Logo fill='white' />
              <Divider
                animate={"inView"}
                fill='white'
                duration={2}
                onAnimationEnded={(val) => {
                  if (val.scaleX === 1) {
                    setisLayoutReady(true);
                  }
                }}
              />
            </LoaderInner>
          </StyledLoader>
        </>
      )}
    </AnimatePresence>
  );
};

export default Loader;

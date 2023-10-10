"use client";

import { AnimatePresence } from "framer-motion";
import { useTheme } from "styled-components";
import { DisableScroll } from "../DisableScroll/DisableScroll";
import Divider from "../Divider/Divider";
import Logo from "../Svgs/Logo";
import { LoaderInner, StyledLoader } from "./StyledLoader";

interface LoaderProps {}

const Loader = ({}: LoaderProps) => {
  const { isLayoutVisible, setisLayoutVisible } = useTheme();

  return (
    <AnimatePresence>
      {!isLayoutVisible && (
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
                    setisLayoutVisible(true);
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

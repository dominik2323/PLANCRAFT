"use client";

import React from "react";
import { StyledLoader } from "./StyledLoader";
import { useTheme } from "styled-components";
import { AnimatePresence } from "framer-motion";

interface LoaderProps {}

const Loader = ({}: LoaderProps) => {
  const { isLayoutReady } = useTheme();

  return (
    <AnimatePresence>
      {!isLayoutReady && (
        <StyledLoader
          initial={"loading"}
          animate={"loading"}
          exit={"finished"}
          variants={{
            loading: { opacity: 1 },
            finished: { opacity: 0 },
          }}></StyledLoader>
      )}
    </AnimatePresence>
  );
};

export default Loader;

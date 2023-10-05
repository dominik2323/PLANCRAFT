"use client";

import { ReactNode, useRef, useState } from "react";
import Divider from "./Divider";
import {
  StyledDividerHeader,
  StyledDividerHeaderInner,
} from "./StyledDividerHeader";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface DividerHeaderProps {
  children: ReactNode;
  className?: string;
}

const DividerHeader = ({ children, className }: DividerHeaderProps) => {
  const [isVisible, setisVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(
    containerRef,
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setisVisible(entry.isIntersecting);
        }
      });
    },
    { rootMargin: "0% 0% 0% 0%" }
  );

  return (
    <StyledDividerHeader className={className} ref={containerRef}>
      <StyledDividerHeaderInner className={className}>
        {children}
      </StyledDividerHeaderInner>
      <Divider animate={isVisible} />
    </StyledDividerHeader>
  );
};

export default DividerHeader;

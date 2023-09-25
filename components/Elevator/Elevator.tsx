"use client";

import { ReactNode, useContext } from "react";
import styled from "styled-components";
import ScrollAnimation, {
  ScrollAnimationContext,
  ScrollYProgress,
} from "../ScrollAnimation/ScrollAnimation";

interface ProductElevatorHoleProps {
  children: (args: ScrollYProgress) => ReactNode;
  scrollHeight: string;
}

const StyledElevator = styled.div<{ scrollHeight: string }>`
  height: ${({ scrollHeight }) => scrollHeight};
  position: relative;
`;

const ElevatorCabin = styled.div`
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
`;

const ElevatorBody = ({ children, scrollHeight }: ProductElevatorHoleProps) => {
  const { animationElRef, scrollYProgress } = useContext(
    ScrollAnimationContext
  );

  return (
    <StyledElevator scrollHeight={scrollHeight}>
      <ElevatorCabin ref={animationElRef}>
        {children(scrollYProgress)}
      </ElevatorCabin>
    </StyledElevator>
  );
};

const Elevator = ({ children, scrollHeight }: ProductElevatorHoleProps) => {
  return (
    <ScrollAnimation offset={[1, 1]} disableIntersectionObserver>
      <ElevatorBody scrollHeight={scrollHeight}>{children}</ElevatorBody>
    </ScrollAnimation>
  );
};

export default Elevator;

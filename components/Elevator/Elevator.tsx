"use client";

import { ReactNode, useContext } from "react";
import styled from "styled-components";
import ScrollAnimation, {
  ScrollAnimationContext,
} from "../ScrollAnimation/ScrollAnimation";

interface ProductElevatorHoleProps {
  children: ReactNode;
}

const StyledElevator = styled.section`
  height: 350vh;
  position: relative;
`;

const ElevatorCabin = styled.div`
  height: 100vh;
  width: 100vw;
  position: sticky;
  top: 0;
`;

const ElevatorBody = ({ children }: ProductElevatorHoleProps) => {
  const {
    animationElRef,
    scrollYProgress: { currentPos, totalDistance, progress },
  } = useContext(ScrollAnimationContext);

  return (
    <StyledElevator data-hideable-navbar>
      <ElevatorCabin ref={animationElRef}>{children}</ElevatorCabin>
    </StyledElevator>
  );
};

const Elevator = ({ children }) => {
  return (
    <ScrollAnimation offset={[1, 1]} disableIntersectionObserver>
      <ElevatorBody>{children}</ElevatorBody>
    </ScrollAnimation>
  );
};

export default Elevator;

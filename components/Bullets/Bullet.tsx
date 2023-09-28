"use client";

import { ReactNode } from "react";
import { Mini } from "../Typography/Mini";
import { Micro } from "../Typography/Micro";
import styled from "styled-components";
import { spaces } from "../../consts/spaces";

interface BulletProps {
  children: ReactNode;
  level: number;
  index: number;
}

export const StyledBullet = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${spaces.m}px;
`;

export const Level2 = styled.div`
  display: grid;
  row-gap: ${spaces.xxs}px;
`;

export const Bullets = styled.div`
  display: grid;
  row-gap: ${spaces.xxs}px;
`;

const charMap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const Bullet = ({ children, level, index }: BulletProps) => {
  return (
    <StyledBullet>
      <Micro>{level === 1 ? charMap[index] : "—"}</Micro>
      <Level2>{children}</Level2>
    </StyledBullet>
  );
};

export default Bullet;

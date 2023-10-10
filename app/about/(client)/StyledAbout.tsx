"use client";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../consts/breakpoints";

export const StyledAbout = styled.main`
  padding: ${({ theme }) => 2 * theme.gapSize}px;
  padding-bottom: 0;
  ${breakpoint.phone} {
    padding: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const AboutValues = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 1 * theme.gapSize}px;
  margin-bottom: ${({ theme }) => 2 * theme.gapSize}px;
`;

export const AboutTeam = styled.section``;

export const AboutTeamIntro = styled.div`
  display: grid;
`;

export const AboutTeamClaim = styled.div`
  display: grid;
  row-gap: ${({ theme }) => 3 * theme.gapSize}px;
  margin: ${({ theme }) => 5 * theme.gapSize}px 0;
  ${breakpoint.tabletLandscape} {
    row-gap: ${({ theme }) => 5 * theme.gapSize}px;
  }
`;

export const AboutTeamClaimHeader = styled.div`
  margin-left: ${({ theme }) => 6 * theme.gapSize}px;
  ${breakpoint.monitor} {
    margin-left: ${({ theme }) => 10 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    margin-left: 0px;
  }
`;

export const AboutTeamClaimInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  justify-items: start;
  column-gap: ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.phone} {
    grid-template-columns: unset;
    row-gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
`;

export const AboutTeamClaimImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledPartners = styled.div``;

export const PartnersList = styled.div`
  margin: ${({ theme }) => 3 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px ${({ theme }) => 4 * theme.gapSize}px;
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => 4 * theme.gapSize}px;
  ${breakpoint.monitor} {
    margin: ${({ theme }) => 2 * theme.gapSize}px
      ${({ theme }) => 1 * theme.gapSize}px
      ${({ theme }) => 3 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    column-gap: ${({ theme }) => 1 * theme.gapSize}px;
    justify-content: space-between;
  }
  ${breakpoint.smallPhone} {
    margin: ${({ theme }) => 2 * theme.gapSize}px
      ${({ theme }) => 1 * theme.gapSize}px
      ${({ theme }) => 3 * theme.gapSize}px;
  }
`;

export const PartnersLogo = styled.img`
  ${breakpoint.tabletLandscape} {
    height: 50px;
  }
  ${breakpoint.phone} {
    height: 30px;
  }
  ${breakpoint.smallPhone} {
    height: 25px;
  }
`;

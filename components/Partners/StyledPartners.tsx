"use client";

import styled from "styled-components";

export const StyledPartners = styled.div``;

export const PartnersList = styled.div`
  margin: ${({ theme }) => 3 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px ${({ theme }) => 4 * theme.gapSize}px;
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => 4 * theme.gapSize}px;
`;

export const PartnersLogo = styled.img``;

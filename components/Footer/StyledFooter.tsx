"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { breakpoint } from "../../consts/breakpoints";

export const StyledFooter = styled.footer`
  background-color: ${colors.primary400};
  padding: ${({ theme }) => 2 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px ${({ theme }) => 1 * theme.gapSize}px;
`;

export const FooterContact = styled.div`
  display: flex;
  gap: ${({ theme }) => 2 * theme.gapSize}px;
  justify-content: space-between;
  padding: ${({ theme }) => 2 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px;
`;

export const FooterContactText = styled.div``;

export const FooterContactLinks = styled.div`
  ${breakpoint.smallNotebook} {
    min-width: 400px;
  }
  ${breakpoint.tabletLandscape} {
    min-width: 350px;
  }
`;

export const FooterContactAddress = styled.div`
  ${breakpoint.smallNotebook} {
    min-width: 250px;
  }
  ${breakpoint.tabletLandscape} {
    min-width: 200px;
  }
`;

export const FooterLogo = styled.div`
  padding: ${({ theme }) => 2 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px;
`;

export const FooterCopywrite = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => 1 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px;
`;

export const FooterPublicity = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => 3 * theme.gapSize}px;
  margin-top: ${({ theme }) => 1 * theme.gapSize}px;
  padding: 0 ${({ theme }) => 1 * theme.gapSize}px;
`;

export const PublicityLogos = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    gap: ${({ theme }) => 3 * theme.gapSize}px;
  }
`;

export const PublicityLogo = styled.img`
  height: 50px;
  ${breakpoint.smallNotebook} {
    height: 40px;
  }
`;

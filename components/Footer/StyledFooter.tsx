"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";
import { colors } from "../../consts/colors";
import { spaces } from "../../consts/spaces";

export const StyledFooter = styled.footer`
  background-color: ${colors.primary400};
  padding: ${({ theme }) => 2 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px ${({ theme }) => 1 * theme.gapSize}px;
  padding-bottom: 0;
`;

export const FooterContact = styled.div`
  display: grid;
  gap: ${({ theme }) => 2 * theme.gapSize}px;
  grid-template-columns: 1fr minmax(600px, 1fr) 1fr;
  grid-template-areas: "text links address";
  padding: ${({ theme }) => 2 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    grid-template-columns: 1fr minmax(400px, 1fr) minmax(250px, 1fr);
  }
  ${breakpoint.tabletLandscape} {
    grid-template-columns: 1fr minmax(350px, 1fr) minmax(200px, 1fr);
  }
  ${breakpoint.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "text links";
    padding: ${({ theme }) => 3 * theme.gapSize}px
      ${({ theme }) => 1 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    grid-template-columns: unset;
    grid-template-areas: "text" "links";
    padding: ${({ theme }) => 3 * theme.gapSize}px 0px;
  }
`;

export const FooterContactText = styled.div`
  grid-area: text;
`;

export const FooterContactLinks = styled.div`
  grid-area: links;
`;

export const FooterContactAddress = styled.div`
  grid-area: address;
  ${breakpoint.tabletPortrait} {
    display: none;
  }
`;

export const FooterLogo = styled.div`
  padding: ${({ theme }) => 2 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    padding: ${({ theme }) => 4 * theme.gapSize}px
      ${({ theme }) => 1 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    padding: ${({ theme }) => 4 * theme.gapSize}px 0px;
  }
`;

export const FooterCopywrite = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => 1 * theme.gapSize}px
    ${({ theme }) => 1 * theme.gapSize}px;
  ${breakpoint.phone} {
    padding: ${({ theme }) => 1 * theme.gapSize}px 0px;
    gap: ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const FooterPublicity = styled.div`
  display: flex;
  background-color: ${colors.white};
  justify-content: space-between;
  gap: ${({ theme }) => 3 * theme.gapSize}px;
  margin-top: ${({ theme }) => 1 * theme.gapSize}px;
  margin-left: ${-1 * spaces.l}px;
  padding: ${({ theme }) => 1 * theme.gapSize}px
    ${({ theme }) => 2 * theme.gapSize}px;
  margin: 0 ${({ theme }) => -1 * theme.gapSize}px;
  ${breakpoint.tabletPortrait} {
    margin-top: ${({ theme }) => 2 * theme.gapSize}px;
    gap: ${({ theme }) => 2 * theme.gapSize}px;
    flex-direction: column;
  }
  ${breakpoint.phone} {
    padding: ${({ theme }) => 1 * theme.gapSize}px
      ${({ theme }) => 1 * theme.gapSize}px;
  }
`;

export const PublicityLogos = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => 2 * theme.gapSize}px;
  ${breakpoint.smallNotebook} {
    gap: ${({ theme }) => 3 * theme.gapSize}px;
  }
  ${breakpoint.phone} {
    align-items: start;
    gap: ${({ theme }) => 2 * theme.gapSize}px;
  }
  ${breakpoint.smallPhone} {
    flex-direction: column;
  }
`;

export const PublicityLogo = styled.img`
  height: 50px;
  ${breakpoint.smallNotebook} {
    height: 40px;
  }
  ${breakpoint.phone} {
    height: 30px;
  }
`;

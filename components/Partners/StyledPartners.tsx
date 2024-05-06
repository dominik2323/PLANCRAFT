"use client";

import styled from "styled-components";
import { breakpoint } from "../../consts/breakpoints";

export const StyledPartners = styled.div``;

export const PartnersList = styled.div`
  margin: calc(3 * var(--gap-size)) calc(1 * var(--gap-size))
    calc(4 * var(--gap-size));
  display: flex;
  align-items: center;
  column-gap: calc(4 * var(--gap-size));
  ${breakpoint.monitor} {
    margin: calc(2 * var(--gap-size)) calc(1 * var(--gap-size))
      calc(3 * var(--gap-size));
  }
  ${breakpoint.phone} {
    column-gap: calc(1 * var(--gap-size));
    justify-content: space-between;
  }
  ${breakpoint.smallPhone} {
    margin: calc(2 * var(--gap-size)) calc(1 * var(--gap-size))
      calc(3 * var(--gap-size));
  }
`;

export const PartnersLogo = styled.img`
  ${breakpoint.smallNotebook} {
    height: 50px;
  }
  ${breakpoint.phone} {
    height: 30px;
  }
  ${breakpoint.smallPhone} {
    height: 25px;
  }
`;

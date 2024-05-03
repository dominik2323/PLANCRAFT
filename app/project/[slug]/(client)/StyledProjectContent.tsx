"use client";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "../../../../consts/breakpoints";
import { colors } from "../../../../consts/colors";

export const StyledProjectContent = styled.div`
  grid-area: content;
`;

export const ProjectBodyImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectBodyImageRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  column-gap: calc(1 * var(--gap-size));
  margin: calc(1 * var(--gap-size)) 0;
  &:first-child {
    margin-top: 0;
  }
  ${breakpoint.phone} {
    grid-auto-flow: unset;
    row-gap: calc(1 * var(--gap-size));
  }
`;

export const StyledProjectDetailText = styled.div`
  color: ${colors.primary400};
  margin: calc(2 * var(--gap-size)) 0;
  p {
    max-width: 600px;
    font-size: 18px;
    line-height: 1.3em;
    letter-spacing: 0;
    ${breakpoint.monitor} {
      font-size: 24px;
      max-width: 900px;
    }
  }
  h2 {
    font-size: 36px;
    line-height: 1.3em;
    ${breakpoint.monitor} {
      font-size: 40px;
    }
    ${breakpoint.phone} {
      font-size: 24px;
    }
  }
`;

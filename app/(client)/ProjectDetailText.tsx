"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";
import { breakpoint } from "../../consts/breakpoints";

interface ProjectDetailTextProps {
  html: string;
}

const StyledProjectDetailText = styled.div`
  color: ${colors.primary400};
  p {
    max-width: 600px;
    font-size: 18px;
    line-height: 1.3em;
    letter-spacing: 0;
    ${breakpoint.monitor} {
      font-size: 21px;
      max-width: 800px;
    }
  }
  h2 {
    font-size: 36px;
    line-height: 1.3em;
    ${breakpoint.monitor} {
      font-size: 40px;
    }
  }
`;

const ProjectDetailText = ({ html }: ProjectDetailTextProps) => {
  return (
    <StyledProjectDetailText
      as={"div"}
      dangerouslySetInnerHTML={{ __html: html }}
      className='wide'
    />
  );
};

export default ProjectDetailText;

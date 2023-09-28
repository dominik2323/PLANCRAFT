"use client";

import styled from "styled-components";
import { colors } from "../../consts/colors";

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
  }
  h2 {
    font-size: 36px;
    line-height: 1.3em;
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

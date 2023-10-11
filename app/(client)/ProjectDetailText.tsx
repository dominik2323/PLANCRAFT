"use client";

import { StyledProjectDetailText } from "../project/[slug]/(client)/StyledProjectContent";

interface ProjectDetailTextProps {
  html: string;
}

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

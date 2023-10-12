"use client";

import { ImageProps } from "../../app/service/[slug]/servicesData";
import RevealAnimation from "../TextAnimation/RevealAnimation";
import { Small } from "../Typography/Small";
import {
  ProjectCardSmallCover,
  StyledProjectCardSmall,
} from "./StyledProjectCardSmall";

interface ProjectCardSmallProps {
  slug: string;
  projectName: string;
  image: ImageProps;
  delay?: number;
}

const ProjectCardSmall = ({
  image,
  projectName,
  slug,
  delay = 0,
}: ProjectCardSmallProps) => {
  return (
    <StyledProjectCardSmall href={`/projekt/${slug}`}>
      <RevealAnimation delay={delay}>
        <ProjectCardSmallCover {...image} />
      </RevealAnimation>
      <RevealAnimation delay={delay + 0.5}>
        <Small className='uppercase'>{projectName}</Small>
      </RevealAnimation>
    </StyledProjectCardSmall>
  );
};

export default ProjectCardSmall;

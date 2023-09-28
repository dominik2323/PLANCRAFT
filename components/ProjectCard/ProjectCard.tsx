"use client";

import { Service } from "../../gql/types";
import Link from "../Link/Link";
import { Mini } from "../Typography/Mini";
import { Small } from "../Typography/Small";
import {
  ProjectCardContent,
  ProjectCardContentFooter,
  ProjectCardContentHeader,
  ProjectCardImage,
  ProjectCardImageWrapper,
  StyledProjectCard,
} from "./StyledCardProject";

interface ProjectCardProps {
  projectName: string;
  services: Service[];
  realization: string;
  slug: string;
  src: string;
  progress?: number;
}

const ProjectCard = ({
  projectName,
  services,
  realization,
  slug,
  src,
  progress,
}: ProjectCardProps) => {
  const revealAnimation = Math.max((5 / 3) * progress - 1 / 3, 0);

  return (
    <StyledProjectCard href={`/projekt/${slug}`}>
      <ProjectCardImageWrapper>
        <ProjectCardImage
          src={src}
          height={100}
          width={100}
          alt={projectName}
        />
      </ProjectCardImageWrapper>

      <ProjectCardContent>
        <ProjectCardContentHeader>
          <Small className='uppercase'>{projectName}</Small>
          {services.map(({ service_name }, i) => (
            <Mini key={i}>{service_name}</Mini>
          ))}
        </ProjectCardContentHeader>

        <ProjectCardContentFooter animate={{ opacity: revealAnimation }}>
          <Mini>Realizace {realization}</Mini>
          <Link as={"span"} href={""}>
            <Mini>Zobrazit projekt</Mini>
          </Link>
        </ProjectCardContentFooter>
      </ProjectCardContent>
    </StyledProjectCard>
  );
};

export default ProjectCard;

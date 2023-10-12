"use client";

import { ImageProps } from "../../app/service/[slug]/servicesData";
import { Service } from "../../gql/types";
import Link from "../Link/Link";
import { Mini } from "../Typography/Mini";
import { Small } from "../Typography/Small";
import {
  ProjectCardContent,
  ProjectCardContentFooter,
  ProjectCardContentHeader,
  ProjectCardImage,
  ProjectCardImageInner,
  ProjectCardImageMask,
  ProjectCardServices,
  StyledProjectCard,
} from "./StyledProjectCard";

interface ProjectCardProps {
  projectName: string;
  services: Service[];
  realization: string;
  slug: string;
  image: ImageProps;
  progress?: number;
}

const ProjectCard = ({
  projectName,
  services,
  realization,
  slug,
  image,
  progress,
}: ProjectCardProps) => {
  const revealAnimation = Math.max((5 / 3) * progress - 1 / 3, 0);

  return (
    <StyledProjectCard href={`/projekt/${slug}`}>
      <ProjectCardImageMask>
        <ProjectCardImageInner>
          <ProjectCardImage
            src={image.src}
            height={image.height}
            width={image.width}
            alt={projectName}
          />
        </ProjectCardImageInner>
      </ProjectCardImageMask>

      <ProjectCardContent>
        <ProjectCardContentHeader>
          <Small className='uppercase'>{projectName}</Small>
          <ProjectCardServices>
            {services.map(({ service_name }, i) => (
              <Mini key={i}>{service_name}</Mini>
            ))}
          </ProjectCardServices>
        </ProjectCardContentHeader>

        <ProjectCardContentFooter animate={{ opacity: revealAnimation }}>
          <Mini>Realizace {realization}</Mini>
          <Link as={"span"} href={""}>
            <Mini className='uppercase'>Zobrazit projekt</Mini>
          </Link>
        </ProjectCardContentFooter>
      </ProjectCardContent>
    </StyledProjectCard>
  );
};

export default ProjectCard;

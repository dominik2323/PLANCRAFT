"use client";

import { easeInOut } from "framer-motion";
import { useState } from "react";
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
  ProjectCardImageAnimation,
  ProjectCardImageAnimationW,
  ProjectCardImageMask,
  ProjectCardInner,
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
  const [hover, sethover] = useState<boolean>(false);
  const revealAnimation = Math.max((5 / 3) * progress - 1 / 3, 0);

  return (
    <StyledProjectCard
      href={`/projekt/${slug}`}
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
    >
      <ProjectCardInner>
        <ProjectCardImageMask>
          <ProjectCardImageAnimationW>
            <ProjectCardImageAnimation
              animate={{ scale: hover ? 1.1 : 1 }}
              transition={{ ease: easeInOut }}
            >
              <ProjectCardImage
                src={image.src}
                height={image.height}
                width={image.width}
                alt={projectName}
              />
            </ProjectCardImageAnimation>
          </ProjectCardImageAnimationW>
        </ProjectCardImageMask>
        <ProjectCardContent>
          <ProjectCardContentHeader>
            <Small className="uppercase">{projectName}</Small>
            <ProjectCardServices>
              {services.map(({ service_name }, i) => (
                <Mini key={i}>{service_name}</Mini>
              ))}
            </ProjectCardServices>
          </ProjectCardContentHeader>

          <ProjectCardContentFooter animate={{ opacity: revealAnimation }}>
            <Mini>Realizace {realization}</Mini>
            <Link as={"span"} href={""}>
              <Mini className="uppercase">Zobrazit projekt</Mini>
            </Link>
          </ProjectCardContentFooter>
        </ProjectCardContent>
      </ProjectCardInner>
    </StyledProjectCard>
  );
};

export default ProjectCard;

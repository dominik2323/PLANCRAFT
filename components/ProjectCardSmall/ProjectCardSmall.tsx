"use client";

import React from "react";
import {
  ProjectCardSmallCover,
  StyledProjectCardSmall,
} from "./StyledProjectCardSmall";
import { ImageProps } from "../../app/service/[slug]/servicesData";
import { Small } from "../Typography/Small";

interface ProjectCardSmallProps {
  slug: string;
  projectName: string;
  image: ImageProps;
}

const ProjectCardSmall = ({
  image,
  projectName,
  slug,
}: ProjectCardSmallProps) => {
  return (
    <StyledProjectCardSmall href={`/projekt/${slug}`}>
      <ProjectCardSmallCover {...image} />
      <Small>{projectName}</Small>
    </StyledProjectCardSmall>
  );
};

export default ProjectCardSmall;

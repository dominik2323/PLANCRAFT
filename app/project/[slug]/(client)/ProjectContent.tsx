"use client";

import React from "react";
import ProjectDetailText from "../../../(client)/ProjectDetailText";
import { Project } from "../../../../gql/types";
import {
  StyledProjectContent,
  ProjectBodyImageRow,
  ProjectBodyImage,
} from "./StyledProjectContent";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <StyledProjectContent>
      {project.project_body.map((item, i) => {
        if (item.__typename === "Text") {
          return <ProjectDetailText key={i} html={item.html} />;
        }
        if (item.__typename === "ImagesRow") {
          return (
            <ProjectBodyImageRow>
              {item.image.map(({ url, width, height, description }, i) => (
                <ProjectBodyImage
                  key={i}
                  src={url}
                  width={width}
                  height={height}
                  alt={description || project.project_name}
                />
              ))}
            </ProjectBodyImageRow>
          );
        }
      })}
    </StyledProjectContent>
  );
};

export default ProjectContent;

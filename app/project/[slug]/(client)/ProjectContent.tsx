"use client";

import ProjectDetailText from "../../../(client)/ProjectDetailText";
import RevealAnimation from "../../../../components/TextAnimation/RevealAnimation";
import { Project } from "../../../../gql/types";
import {
  ProjectBodyImage,
  ProjectBodyImageRow,
  StyledProjectContent,
} from "./StyledProjectContent";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <StyledProjectContent>
      {project.project_body.map((item, i) => {
        if (item.__typename === "Text") {
          return (
            <RevealAnimation key={i}>
              <ProjectDetailText html={item.html} />
            </RevealAnimation>
          );
        }
        if (item.__typename === "ImagesRow") {
          return (
            <ProjectBodyImageRow key={i}>
              {item.image.map(({ url, width, height, description }, i) => (
                <RevealAnimation key={i} delay={i * 0.5}>
                  <ProjectBodyImage
                    src={url}
                    width={width}
                    height={height}
                    alt={description || project.project_name}
                  />
                </RevealAnimation>
              ))}
            </ProjectBodyImageRow>
          );
        }
      })}
    </StyledProjectContent>
  );
};

export default ProjectContent;

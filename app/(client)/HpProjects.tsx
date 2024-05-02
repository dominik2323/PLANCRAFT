"use client";

import styled from "styled-components";
import Divider from "../../components/Divider/Divider";
import DividerHeader from "../../components/Divider/DividerHeader";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectCardZoomW } from "../../components/ProjectCard/StyledProjectCard";
import { Mini } from "../../components/Typography/Mini";
import Zoom from "../../components/Zoom/Zoom";
import { device } from "../../consts/breakpoints";
import { Project } from "../../gql/types";
import { useWindowSize } from "../../hooks/useWindowSize";

interface HpProjectsProps {
  projects: Project[];
}

export const StyledHpProjects = styled.div``;

const HpProjects = ({ projects }: HpProjectsProps) => {
  const { w, h } = useWindowSize(true);
  return (
    <StyledHpProjects data-hide-navbar>
      <Zoom
        disable={w <= device.tabletPortrait || h <= 650}
        header={
          <DividerHeader className="no-padding">
            <Mini className="uppercase">Projekty</Mini>
          </DividerHeader>
        }
        footer={<Divider />}
        items={projects.map(
          (
            {
              project_name,
              _slug,
              project_category,
              project_realization,
              project_cover,
            },
            i,
          ) =>
            (p) => {
              return (
                <ProjectCardZoomW key={_slug}>
                  <ProjectCard
                    projectName={project_name}
                    services={project_category}
                    realization={project_realization}
                    slug={_slug}
                    image={{
                      src: project_cover.url,
                      width: project_cover.width,
                      height: project_cover.height,
                      alt: project_cover.description || project_name,
                    }}
                    key={i}
                    progress={Number(p.toFixed(2))}
                  />
                  {projects.length - 1 !== i && <Divider hidePlus />}
                </ProjectCardZoomW>
              );
            },
        )}
      />
    </StyledHpProjects>
  );
};

export default HpProjects;

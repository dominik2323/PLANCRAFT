"use client";

import styled from "styled-components";
import Divider from "../../components/Divider/Divider";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Mini } from "../../components/Typography/Mini";
import Zoom from "../../components/Zoom/Zoom";
import { Projects } from "../../gql/types";
import DividerHeader from "../../components/Divider/DividerHeader";

interface HpProjectsProps {
  projects: Projects;
}

const StyledHpProjects = styled.div``;

const HpProjects = ({ projects }: HpProjectsProps) => {
  return (
    <StyledHpProjects>
      <Zoom
        header={
          <DividerHeader className='no-padding'>
            <Mini className='uppercase'>Projekty</Mini>
          </DividerHeader>
        }
        footer={<Divider />}
        items={projects.items.map(
          (
              {
                project_name,
                _slug,
                project_category,
                project_realization,
                project_cover,
              },
              i
            ) =>
            (p) => {
              return (
                <>
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
                  {projects.items.length - 1 !== i && <Divider hidePlus />}
                </>
              );
            }
        )}
      />
    </StyledHpProjects>
  );
};

export default HpProjects;

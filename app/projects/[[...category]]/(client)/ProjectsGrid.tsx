"use client";

import { useLazyQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { Fragment, useState } from "react";
import getClient from "../../../../apollo/client";
import Divider from "../../../../components/Divider/Divider";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import { GetProjects } from "../../../../gql/GetProjects";
import {
  Project,
  Projects,
  Query,
  QueryProjectsArgs,
} from "../../../../gql/types";
import { ProjectCardW, StyledProjectsGrid } from "./StyledProjectsGrid";
import Button from "../../../../components/Button/Button";

interface ProjectsGridProps {
  projects: Projects;
  totalCount: number;
}

export const projectsPerPage = 6;

const ProjectsGrid = ({
  projects: initialProjects,
  totalCount,
}: ProjectsGridProps) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects.items);
  const [skip, setSkip] = useState<number>(projectsPerPage);
  const query = useParams<{ category: string[] }>();

  const client = getClient();

  const [getProjects, { loading }] = useLazyQuery<Query>(GetProjects, {
    client: client,
    onCompleted(data) {
      setSkip((p) => p + projectsPerPage);
      setProjects((p) => [...p, ...data.Projects.items]);
    },
  });

  return (
    <StyledProjectsGrid>
      {projects.map(
        (
          {
            project_name,
            _slug,
            project_realization,
            project_category,
            project_cover,
          },
          i
        ) => (
          <Fragment key={_slug}>
            <ProjectCardW>
              <ProjectCard
                projectName={project_name}
                slug={_slug}
                realization={project_realization}
                services={project_category}
                image={{
                  src: project_cover.url,
                  width: project_cover.width,
                  height: project_cover.height,
                  alt: project_cover.description || project_name,
                }}
              />
            </ProjectCardW>
            {!(i === projects.length) && <Divider hidePlus />}
          </Fragment>
        )
      )}
      {totalCount > projects.length && (
        <Button
          onClick={() => {
            getProjects({
              variables: {
                locale: "cs-CZ",
                skip: skip,
                limit: projectsPerPage,
                where: {
                  project_category: { _slug_any: query.category || [] },
                },
              } as QueryProjectsArgs,
            });
          }}>
          {loading ? "Načítám" : "Další projekty"}
        </Button>
      )}
    </StyledProjectsGrid>
  );
};

export default ProjectsGrid;

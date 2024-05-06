"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Table from "../../../../components/Table/Table";
import RevealAnimation from "../../../../components/TextAnimation/RevealAnimation";
import { Mini } from "../../../../components/Typography/Mini";
import { Small } from "../../../../components/Typography/Small";
import { Project } from "../../../../gql/types";
import {
  ProjectDescriptionWrapper,
  ProjectElevatorInner,
  SProjectElevator,
} from "./SProjectElevator";

interface ProjectElevatorProps {
  project: Project;
}

const ProjectElevator = ({ project }: ProjectElevatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, sethasOverflow] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      sethasOverflow(
        containerRef.current.scrollHeight > containerRef.current.clientHeight
      );
    };

    handleResize();
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SProjectElevator
      ref={containerRef}
      className={hasOverflow ? "has-overflow" : ""}
    >
      <ProjectElevatorInner>
        <RevealAnimation>
          <Small className='uppercase'>{project.project_name}</Small>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <ProjectDescriptionWrapper>
            <Mini>{project.project_description}</Mini>
          </ProjectDescriptionWrapper>
        </RevealAnimation>
        <Table
          delayAnimation={1}
          items={[
            {
              header: "Typ služby",
              body: project.project_category
                .map((x) => x.service_name)
                .join(`, `),
            },
            { header: "Realizace", body: project.project_realization },
            ...project.project_table.map(({ table_body, table_header }) => ({
              header: table_header,
              body: table_body,
            })),
          ]}
        />
      </ProjectElevatorInner>
    </SProjectElevator>
  );
};

export default ProjectElevator;

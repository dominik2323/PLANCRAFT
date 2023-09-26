"use client";

import React from "react";
import styled from "styled-components";
import Project from "../../components/Project/Project";
import Zoom from "../../components/Zoom/Zoom";

interface HpProjectsProps {}

const StyledHpProjects = styled.div``;

const data = [
  {
    projectName: "ICE TOWER",
    projectType: "Projektová dokumentace",
    realization: "KOGAA, 2021",
    slug: "ice-tower",
    src: "/imgs/dummy-ice-tower.jpg",
  },
  {
    projectName: "Kumst",
    projectType: "Zaměřování objektů",
    realization: "KOGAA, 2021",
    slug: "ice-tower",
    src: "/imgs/dummy-ice-tower.jpg",
  },
  {
    projectName: "JIC",
    projectType: "Energetická úspornost",
    realization: "KOGAA, 2021",
    slug: "ice-tower",
    src: "/imgs/dummy-ice-tower.jpg",
  },
];

const HpProjects = ({}: HpProjectsProps) => {
  return (
    <StyledHpProjects>
      <Zoom
        items={data.map(
          ({ projectName, projectType, realization, slug, src }, i) =>
            (p) => {
              return (
                <Project
                  projectName={projectName}
                  projectType={projectType}
                  realization={realization}
                  slug={slug}
                  src={src}
                  key={i}
                  progress={p}
                />
              );
            }
        )}
      />
    </StyledHpProjects>
  );
};

export default HpProjects;

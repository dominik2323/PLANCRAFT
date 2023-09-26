"use client";

import { useEffect, useRef, useState } from "react";
import {
  ProjectCardContent,
  ProjectCardContentFooter,
  ProjectCardContentHeader,
  ProjectCardImage,
  ProjectImageWrapper,
  StyledProject,
} from "./StyledProject";
import { Small } from "../Typography/Small";
import { Mini } from "../Typography/Mini";
import Link from "../Link/Link";
import { AnimatePresence, progress } from "framer-motion";

interface ProjectProps {
  projectName: string;
  projectType: string;
  realization: string;
  slug: string;
  src: string;
  progress?: number;
}

const Project = ({
  projectName,
  projectType,
  realization,
  slug,
  src,
  progress,
}: ProjectProps) => {
  // const [imageAspect, setImageAspect] = useState<number>(1);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // const imageEl = imageWrapperRef.current.querySelector("img");
      // imageEl.style.cssText = "display: none;";
      // const aspect =
      // console.log(aspect);
      // imageEl.style.cssText = `display: block; aspect-ratio: ${aspect}`;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledProject>
      <ProjectImageWrapper>
        <ProjectCardImage
          src={src}
          height={2000}
          width={2000}
          alt={projectName}
        />
      </ProjectImageWrapper>

      <ProjectCardContent>
        <ProjectCardContentHeader>
          <Small className='uppercase'>{progress}</Small>
          <Mini>{projectType}</Mini>
        </ProjectCardContentHeader>
        <AnimatePresence>
          {progress > 0.8 && (
            <ProjectCardContentFooter
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}>
              <Mini>Realizace {realization}</Mini>
              <Link href={`project/${slug}`}>{projectType}</Link>
            </ProjectCardContentFooter>
          )}
        </AnimatePresence>
      </ProjectCardContent>
    </StyledProject>
  );
};

export default Project;

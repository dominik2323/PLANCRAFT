import { Metadata } from "next";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import { Large } from "../../../components/Typography/Large";
import { Mini } from "../../../components/Typography/Mini";
import { GetProjects } from "../../../gql/GetProjects";
import { GetServices } from "../../../gql/GetServices";
import {
  Query,
  QueryProjectsArgs,
  QueryServicesArgs,
} from "../../../gql/types";
import {
  ProjectDividerHeaderInner,
  ProjectFilter,
  ProjectFilters,
  ProjectsHero,
  StyledProjects,
} from "./(client)/StyledProjects";
import ProjectsGrid, { projectsPerPage } from "./(client)/ProjectsGrid";
import { projectsData } from "./(client)/projectsData";
import { homepageData } from "../../(client)/homepageData";

export const metadata: Metadata = {
  title: projectsData.name,
  description: projectsData.heroHeader,
  openGraph: {
    images: homepageData.about.figureBanner.image.src,
    title: projectsData.name,
    description: projectsData.heroPerex,
  },
};

export const revalidate = 10;

interface PageProps {
  params: { category: string };
}

const page = async ({ params: { category } }: PageProps) => {
  const client = getClient();

  const {
    data: { Projects },
  } = await client.query<Query>({
    query: GetProjects,
    variables: {
      limit: projectsPerPage,
      where: {
        is_featured: true,
        project_category: { _slug_any: category || [] },
      },
      coverImageWidth: 1000,
      coverImageHeight: 1000,
      coverImageFormat: "webp",
    } as QueryProjectsArgs,
  });

  const {
    data: { Services },
  } = await client.query<Query>({
    query: GetServices,
    variables: { limit: null, locale: "cs-CZ" } as QueryServicesArgs,
  });

  return (
    <StyledProjects>
      <ProjectsHero>
        <Large>{projectsData.heroHeader}</Large>
        <Mini>{projectsData.heroPerex}</Mini>
      </ProjectsHero>
      <DividerHeader className='no-padding'>
        <ProjectDividerHeaderInner>
          <Mini className='uppercase'>Filtry</Mini>
          <ProjectFilters>
            <ProjectFilter
              href={"/projekty"}
              className={category ? "inactive" : ""}>
              <Mini>Vše</Mini>
            </ProjectFilter>
            {Services.items.map(({ service_name, _slug }) => (
              <ProjectFilter
                key={_slug}
                href={`/projekty/${_slug}`}
                className={category?.includes(_slug) ? "" : "inactive"}>
                <Mini>{service_name}</Mini>
              </ProjectFilter>
            ))}
          </ProjectFilters>
        </ProjectDividerHeaderInner>
      </DividerHeader>
      <ProjectsGrid projects={Projects} totalCount={Projects.total} />
      <ClientQuote
        quote={projectsData.quote.quote}
        client={projectsData.quote.client}
      />
    </StyledProjects>
  );
};

export default page;

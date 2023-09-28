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
import ProjectsGrid from "./(client)/ProjectsGrid";

const metadata: Metadata = {};

interface PageProps {
  params: { category: string };
}

export const projectsPerPage = 6;
export const revalidate = 10;

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
        <Large>Projekty</Large>
        <Mini>
          Dělá nám radost se podílet na rozmanitých a inovativních projektech,
          které nerezonují jen v lokálním prostředí, ale jsou uznávanou
          inspirací na celém světě.
        </Mini>
      </ProjectsHero>
      <DividerHeader>
        <ProjectDividerHeaderInner>
          <Mini className='uppercase'>Filtry</Mini>
          <ProjectFilters>
            <ProjectFilter
              href={"/projekty"}
              className={category ? "inactive" : ""}>
              <Mini className='uppercase'>Vše</Mini>
            </ProjectFilter>
            {Services.items.map(({ service_name, _slug }) => (
              <ProjectFilter
                key={_slug}
                href={`/projekty/${_slug}`}
                className={category?.includes(_slug) ? "" : "inactive"}>
                <Mini className='uppercase'>{service_name}</Mini>
              </ProjectFilter>
            ))}
          </ProjectFilters>
        </ProjectDividerHeaderInner>
      </DividerHeader>
      <ProjectsGrid projects={Projects} totalCount={Projects.total} />
      <ClientQuote
        quote={
          "“Spolupráce s Plancraft byla jednoduše bezkonkurenční. Jejich profesionální přístup a schopnost dodat vynikající výsledky překonala veškerá očekávání.”"
        }
        client={"— Radek Vašulík, Archidrip s.r.o."}
      />
    </StyledProjects>
  );
};

export default page;

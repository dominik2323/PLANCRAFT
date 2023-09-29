import { Metadata } from "next";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import Link from "../../../components/Link/Link";
import Table from "../../../components/Table/Table";
import { Mini } from "../../../components/Typography/Mini";
import { Small } from "../../../components/Typography/Small";
import { GetProjects } from "../../../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../../../gql/types";
import ProjectContent from "./(client)/ProjectContent";
import {
  ProjectDescriptionWrapper,
  ProjectDetail,
  ProjectElevator,
  ProjectNavigation,
  ProjectNavigationInner,
  StyledProject,
} from "./(client)/StyledProject";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {
    data: { Projects },
  } = await getProjectData(params.slug);
  const { project_name, project_description, project_cover } =
    Projects.items[0];

  return {
    title: `Projekt\u2002|\u2002${project_name}`,
    description: project_description,
    openGraph: {
      images: project_cover.url,
      title: project_name,
      description: project_description,
    },
  };
}

export const revalidate = 10;

interface PageProps {
  params: { slug: string };
}

async function getProjectData(slug: string) {
  const client = getClient();
  return await client.query<Query>({
    query: GetProjects,
    variables: {
      locale: "cs-CZ",
      where: { _slug_any: [slug] },
    } as QueryProjectsArgs,
  });
}

const page = async ({ params: { slug } }: PageProps) => {
  const {
    data: {
      Projects: { items: projects },
    },
  } = await getProjectData(slug);
  const project = projects[0];

  return (
    <StyledProject>
      <ProjectDetail>
        <ProjectContent project={project} />
        <ProjectElevator>
          <Small className='uppercase'>{project.project_name}</Small>
          <ProjectDescriptionWrapper>
            <Mini>{project.project_description}</Mini>
          </ProjectDescriptionWrapper>
          <Table
            items={[
              {
                header: "Role v projektu",
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
        </ProjectElevator>
      </ProjectDetail>
      <ProjectNavigation>
        <DividerHeader className='flip'>
          <ProjectNavigationInner>
            <Mini>
              <Link className='flip' href={"/projects"}>
                {"Zpět na projekty"}
              </Link>
            </Mini>
            <Mini>
              <Link href={`/project/${project.next_project[0]._slug}`}>
                {`Další projekt: ${project.next_project[0].project_name}`}
              </Link>
            </Mini>
          </ProjectNavigationInner>
        </DividerHeader>
      </ProjectNavigation>
      {project.project_client_quote_name && project.project_client_quote && (
        <ClientQuote
          client={project.project_client_quote_name}
          quote={project.project_client_quote}
        />
      )}
    </StyledProject>
  );
};

export default page;

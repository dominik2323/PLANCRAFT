import { Metadata } from "next";
import ProjectDetailText from "../../(client)/ProjectDetailText";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import Table from "../../../components/Table/Table";
import { Mini } from "../../../components/Typography/Mini";
import { Small } from "../../../components/Typography/Small";
import { GetProjects } from "../../../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../../../gql/types";
import {
  ProjectBodyImage,
  ProjectBodyImageRow,
  ProjectContent,
  ProjectDescriptionWrapper,
  ProjectDetail,
  ProjectElevator,
  ProjectNavigation,
  ProjectNavigationInner,
  StyledProject,
} from "./(client)/StyledProject";
import Link from "../../../components/Link/Link";
import DividerHeader from "../../../components/Divider/DividerHeader";

export const metadata: Metadata = {};

interface PageProps {
  params: { slug: string };
}

const page = async ({ params: { slug } }: PageProps) => {
  const client = getClient();
  const {
    data: {
      Projects: { items: projects },
    },
  } = await client.query<Query>({
    query: GetProjects,
    variables: {
      locale: "cs-CZ",
      where: { _slug_any: [slug] },
    } as QueryProjectsArgs,
  });
  const project = projects[0];

  return (
    <StyledProject>
      <ProjectDetail>
        <ProjectContent>
          {project.project_body.map((item) => {
            if (item.__typename === "Text") {
              return <ProjectDetailText html={item.html} />;
            }
            if (item.__typename === "ImagesRow") {
              return (
                <ProjectBodyImageRow>
                  {item.image.map(({ url, width, height, description }, i) => (
                    <ProjectBodyImage
                      key={i}
                      src={url}
                      width={width}
                      height={height}
                      alt={description || project.project_name}
                    />
                  ))}
                </ProjectBodyImageRow>
              );
            }
          })}
        </ProjectContent>
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

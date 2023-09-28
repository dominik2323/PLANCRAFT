import { Metadata } from "next";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import NumberedList from "../../../components/NumberedList/NumberedList";
import PageIntro from "../../../components/PageIntro/PageIntro";
import ProjectCardSmall from "../../../components/ProjectCardSmall/ProjectCardSmall";
import Services from "../../../components/Services/Services";
import { Medium } from "../../../components/Typography/Medium";
import { Mini } from "../../../components/Typography/Mini";
import { GetProjects } from "../../../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../../../gql/types";
import {
  ServiceAdvantages,
  ServicePerex,
  SimilarProjects,
  SimilarProjectsInner,
  StyledService,
} from "./(client)/StyledService";
import { servicesData } from "./servicesData";

export const metadata: Metadata = {};

interface PageProps {
  params: { slug: string };
}

const page = async ({ params: { slug } }: PageProps) => {
  const data = servicesData[slug];

  const client = getClient();
  const {
    data: { Projects },
  } = await client.query<Query>({
    query: GetProjects,
    variables: {
      limit: 3,
      where: {
        project_category: { _slug_any: [slug] },
      },
    } as QueryProjectsArgs,
  });

  return (
    <StyledService>
      <PageIntro
        withCta
        heroHeader={data.heroHeader}
        figureBanner={{
          perex: data.figureBanner.perex,
          image: {
            src: data.figureBanner.image.src,
            width: data.figureBanner.image.width,
            height: data.figureBanner.image.height,
            alt: data.figureBanner.image.alt,
          },
        }}
        introPerex={data.introPerex}
        scrollFigureBanner={{
          image: {
            src: data.scrollFigureBanner.image.src,
            width: data.scrollFigureBanner.image.width,
            height: data.scrollFigureBanner.image.height,
            alt: data.scrollFigureBanner.image.alt,
          },
          items: data.scrollFigureBanner.items,
        }}
      />
      {data.serviceContent.type === "cabinet" && (
        <Services
          mainHeader={data.serviceContent.mainHeader}
          list={data.serviceContent.list}
        />
      )}
      {data.serviceContent.type === "list" && (
        <NumberedList items={data.serviceContent.list} />
      )}
      <ServicePerex>
        <Medium className='break-lines'>{data.servicePerex}</Medium>
      </ServicePerex>
      {data.advantages && (
        <ServiceAdvantages>
          <DividerHeader>
            <Mini>Výhody</Mini>
          </DividerHeader>
          <NumberedList items={data.advantages} />
        </ServiceAdvantages>
      )}
      {Projects.items.length !== 0 && (
        <SimilarProjects>
          <DividerHeader>
            <Mini>Související projekty</Mini>
          </DividerHeader>
          <SimilarProjectsInner>
            {Projects.items.map(({ project_name, _slug, project_cover }) => (
              <ProjectCardSmall
                projectName={project_name}
                slug={_slug}
                image={{
                  src: project_cover.url,
                  width: project_cover.width,
                  height: project_cover.width,
                  alt: project_cover.description || project_name,
                }}
              />
            ))}
          </SimilarProjectsInner>
        </SimilarProjects>
      )}
      <ClientQuote client={data.quote.client} quote={data.quote.quote} />
    </StyledService>
  );
};

export default page;

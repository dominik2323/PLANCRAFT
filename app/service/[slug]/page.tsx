import { Metadata } from "next";
import getClient from "../../../apollo/client";
import ClientQuote from "../../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../../components/Divider/DividerHeader";
import NumberedList from "../../../components/NumberedList/NumberedList";
import PageIntro from "../../../components/PageIntro/PageIntro";
import ProjectCardSmall from "../../../components/ProjectCardSmall/ProjectCardSmall";
import { ProjectsCardsSmallWrapper } from "../../../components/ProjectCardSmall/StyledProjectCardSmall";
import Services from "../../../components/Services/Services";
import { Medium } from "../../../components/Typography/Medium";
import { Mini } from "../../../components/Typography/Mini";
import { GetProjects } from "../../../gql/GetProjects";
import { Query, QueryProjectsArgs } from "../../../gql/types";
import {
  ServiceAdvantages,
  ServicePerex,
  SimilarProjects,
  StyledService,
} from "./(client)/StyledService";
import { servicesData } from "./servicesData";

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.slug;
  return {
    title: `Služba\u2002|\u2002${servicesData[slug].name}`,
    description: servicesData[slug].introPerex,
    openGraph: {
      images: servicesData[slug].figureBanner.image.src,
      title: servicesData[slug].heroHeader,
      description: servicesData[slug].introPerex,
    },
  };
}
export const revalidate = 10;

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
      limit: 4,
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
            <Mini className='uppercase'>Výhody</Mini>
          </DividerHeader>
          <NumberedList items={data.advantages} />
        </ServiceAdvantages>
      )}
      {Projects.items.length !== 0 && (
        <SimilarProjects>
          <DividerHeader>
            <Mini>Související projekty</Mini>
          </DividerHeader>
          <ProjectsCardsSmallWrapper>
            {Projects.items.map(({ project_name, _slug, project_cover }) => (
              <ProjectCardSmall
                key={_slug}
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
          </ProjectsCardsSmallWrapper>
        </SimilarProjects>
      )}
      <ClientQuote client={data.quote.client} quote={data.quote.quote} />
    </StyledService>
  );
};

export default page;

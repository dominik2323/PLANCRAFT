import { MetadataRoute } from "next";
import { navConfig } from "../components/Navbar/navConfig";
import getClient from "../apollo/client";
import { GetProjects } from "../gql/GetProjects";
import { Query, QueryProjectsArgs, QueryServicesArgs } from "../gql/types";
import { GetServices } from "../gql/GetServices";

const domain = "https://plancraft.eu";
const date = new Date();
const generateRow = (url) => ({
  url: `${domain}${url}`,
  lastModified: date,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = getClient();
  const {
    data: { Projects: projects },
  } = await client.query<Query>({
    query: GetProjects,
    variables: { limit: null, locale: "cs-CZ" } as QueryProjectsArgs,
  });
  const {
    data: { Services: services },
  } = await client.query<Query>({
    query: GetServices,
    variables: { limit: null, locale: "cs-CZ" } as QueryServicesArgs,
  });

  const projectsPages = services.items.map((s) =>
    generateRow(`/projekty/${s._slug}`)
  );

  const projectPages = projects.items.map((p) =>
    generateRow(`/projekt/${p._slug}`)
  );

  const staticPages = navConfig.map((page) => generateRow(page.slug)).flat();

  return [generateRow("/"), ...staticPages, ...projectPages, ...projectsPages];
}

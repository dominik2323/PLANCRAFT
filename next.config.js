/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/kontakt",
        destination: "/contact",
      },
      {
        source: "/projektova-dokumentace",
        destination: "/services/documentations",
      },
      {
        source: "/projektova-dokumentace",
        destination: "/services/measuring",
      },
      {
        source: "/design-due-diligence",
        destination: "/services/design",
      },
      {
        source: "/projekty/:path*",
        destination: "/projects/:path*",
      },
      {
        source: "/projekt/:path*",
        destination: "/project/:path*",
      },
      {
        source: "/o-nas",
        destination: "/about",
      },
      {
        source: "/kontakt",
        destination: "/contact",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

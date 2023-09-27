import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  generates: {
    "./gql/types.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Learning the front-end`,
    siteUrl: `https://gultyaev.github.io/learning-front-end/`,
  },
  pathPrefix: "/learning-front-end",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-6QGWJV79HM"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "starters-pages",
        path: "./src/starters-pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "starters-pages",
        path: "./src/tips-pages/",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
  ],
};

export default config;

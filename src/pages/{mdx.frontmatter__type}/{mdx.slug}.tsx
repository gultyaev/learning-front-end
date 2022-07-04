import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../../components/Layout";
import { layoutPrimitives } from "../../components/Primitives";

interface StarterProjectPageProps {
  data: Queries.StarterProjectPageQuery;
}

function StarterProjectPage({ data }: StarterProjectPageProps) {
  return (
    <Layout title={data.mdx?.frontmatter?.title}>
      <MDXProvider components={layoutPrimitives}>
        <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}

export default StarterProjectPage;

export const query = graphql`
  query StarterProjectPage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`;

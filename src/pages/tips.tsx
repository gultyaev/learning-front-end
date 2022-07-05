import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { H1 } from "../components/Primitives";

interface TipsPageProps {
  data: Queries.TipsQuery;
}

function TipsPage({ data }: TipsPageProps) {
  return (
    <Layout>
      <H1>Tips</H1>

      <div className="flex flex-col py-6 gap-5">
        {data.allMdx.nodes.map((n) => (
          <div key={n.slug} className="flex justify-between items-start">
            <h2 className="text-2xl hover:underline">
              <Link to={`/tip/${n.slug}`}>{n.frontmatter?.title}</Link>
            </h2>

            <span className="italic">{n.frontmatter?.date}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default TipsPage;

export const query = graphql`
  query Tips {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "tip" } } }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
        }
      }
    }
  }
`;

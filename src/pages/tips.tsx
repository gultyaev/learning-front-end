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

      <div className="flex flex-col gap-4">
        {data.allMdx.nodes.map((n) => (
          <article key={n.slug} className="border-b-4 border-b-slate-800 pb-4 last:border-0">
            <h2 className="text-2xl underline hover:text-amber-500 inline-block">
              <Link to={`/tip/${n.slug}`}>{n.frontmatter?.title}</Link>
            </h2>

            <div className="italic mb-4">{n.frontmatter?.date}</div>

            <div>{n.excerpt}</div>
          </article>
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
        excerpt
      }
    }
  }
`;

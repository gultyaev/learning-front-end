import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { H1, P } from "../components/Primitives";
import StarterProjectListItem from "../components/StarterProjectListItem";

interface IndexPageProps {
  data: Queries.StarterProjectsQuery;
}

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout description="API services aimed to help beginner front-end developers to learn by practice">
      <H1>Projects</H1>

      <P>
        This page contains a bunch of projects that are API services aimed to
        help beginner front-end developers to learn by practice. Also, projects
        target real life-like scenarios, so the experience earned by
        implementing the front-end part and connecting with an API will be
        viable.
      </P>

      <P>
        You can approach front-end creation using any technology stack you
        prefer as these projects are pure API with no front-end attached. You
        could make even a web site on pure HTML/CSS/JS!
      </P>

      <div className="flex flex-col space-y-5">
        {data.allMdx.nodes.map((n) => (
          <StarterProjectListItem
            data={n}
            key={n.slug}
          ></StarterProjectListItem>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query StarterProjects {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
          description
          prerequisites
          complexity
        }
      }
    }
  }
`;

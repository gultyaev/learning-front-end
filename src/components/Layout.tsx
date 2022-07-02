import { graphql, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";

interface LayoutProps {
  title?: string;
}

function Layout({ children, title }: PropsWithChildren<LayoutProps>) {
  const { site } = useStaticQuery<Queries.SiteStaticQuery>(graphql`
    query SiteStatic {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const combinedTitle = [title, site?.siteMetadata?.title]
    .filter(Boolean)
    .join(" | ");

  return (
    <main>
      <title>{combinedTitle}</title>

      {children}
    </main>
  );
}

export default Layout;

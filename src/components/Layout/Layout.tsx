import { graphql, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { H1 } from "../Primitives";
import Header from "./Header";
import Wrapper from "./Wrapper";

interface LayoutProps {
  title?: string;
  description?: string | null;
}

function Layout({
  children,
  title,
  description,
}: PropsWithChildren<LayoutProps>) {
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
    <>
      <Helmet>
        <title>{combinedTitle}</title>

        {description && <meta name="description" content={description} />}

        <html lang="en" />
        <body className="min-h-screen bg-[#000424] overflow-y-visible" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="text-gray-300 flex-1 pb-10 text-lg">
          <Wrapper className="py-12 md:py-16">
            {title && <H1>{title}</H1>}
            {children}
          </Wrapper>
        </main>
      </div>
    </>
  );
}

export default Layout;

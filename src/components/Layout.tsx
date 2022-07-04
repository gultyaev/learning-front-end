import { graphql, Link, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { H1 } from "./Primitives";

interface LayoutProps {
  title?: string;
  description?: string | null;
}

interface WrapperProps {
  className?: string;
}

const Wrapper = ({ children, className }: PropsWithChildren<WrapperProps>) => (
  <div className={`py-4 px-6 max-w-6xl mx-auto ${className || ""}`}>
    {children}
  </div>
);

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

        {title && <meta property="og:title" content={title} />}
        {title && <meta name="twitter:title" content={title} />}

        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
      </Helmet>

      <header className="bg-slate-800">
        <Wrapper className="text-4xl text-white">
          <Link to="/">{site?.siteMetadata?.title}</Link>
        </Wrapper>
      </header>

      <main className="bg-slate-600 min-h-screen text-gray-100">
        <Wrapper className="md:py-8">
          {title && <H1>{title}</H1>}
          {children}
        </Wrapper>
      </main>
    </>
  );
}

export default Layout;

import { graphql, Link, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { A, H1 } from "./Primitives";

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

        {description && <meta name="description" content={description} />}

        <html lang="en" />
        <body className="min-h-screen bg-slate-600" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <header className="bg-slate-800 shadow-md">
          <Wrapper className="text-4xl text-white">
            <Link to="/">{site?.siteMetadata?.title}</Link>
          </Wrapper>
        </header>

        <main className="text-gray-100 flex-1 pb-10">
          <Wrapper className="md:py-8">
            {title && <H1>{title}</H1>}
            {children}
          </Wrapper>
        </main>

        <footer className="bg-slate-900 py-4">
          <Wrapper>
            <a
              href="https://github.com/gultyaev/learning-front-end"
              target="_blank"
              className="text-white underline"
            >
              GitHub
            </a>
          </Wrapper>
        </footer>
      </div>
    </>
  );
}

export default Layout;

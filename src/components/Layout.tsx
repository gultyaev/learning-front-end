import { graphql, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";

interface LayoutProps {
  title?: string;
}

interface WrapperProps {
  className?: string;
}

const Wrapper = ({ children, className }: PropsWithChildren<WrapperProps>) => (
  <div className={`py-4 px-6 max-w-6xl mx-auto ${className || ""}`}>
    {children}
  </div>
);

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
    <>
      <header className="bg-slate-700">
        <Wrapper className="text-4xl text-white">
          {title || site?.siteMetadata?.title}
        </Wrapper>
      </header>
      <main className="bg-slate-500 min-h-screen text-gray-100">
        <title>{combinedTitle}</title>

        <Wrapper className="md:py-8">{children}</Wrapper>
      </main>
    </>
  );
}

export default Layout;

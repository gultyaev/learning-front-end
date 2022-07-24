import React, { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-5xl font-bold uppercase mb-16">{children}</h1>
);

export const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="text-4xl font-semibold mt-10 mb-6">{children}</h2>
);

export const H3 = ({ children }: PropsWithChildren) => (
  <h3 className="text-3xl font-semibold mt-10 mb-6">{children}</h3>
);

export const P = ({ children }: PropsWithChildren) => (
  <p className="mb-3 text-lg last-child:mb-0">{children}</p>
);

export const Ul = ({ children }: PropsWithChildren) => (
  <ul className="list-disc text-lg mb-4 pl-4">{children}</ul>
);

export const A = ({ children, ...props }: PropsWithChildren) => (
  <a
    className="hover:underline text-amber-500 hover:text-amber-400"
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

export const InlineCode = ({ children }: PropsWithChildren) => (
  <code className="bg-slate-900 text-lg py-1 px-1.5 mx-0.5 rounded-md whitespace-normal break-words">
    {children}
  </code>
);

export const layoutPrimitives = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  a: A,
  inlineCode: InlineCode,
};

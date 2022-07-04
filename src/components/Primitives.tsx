import React, { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-4xl mb-8">{children}</h1>
);

export const P = ({ children }: PropsWithChildren) => (
  <p className="mb-4">{children}</p>
);

export const Ul = ({ children }: PropsWithChildren) => (
  <ul className="list-disc mb-4 pl-4">{children}</ul>
);

export const A = ({ children }: PropsWithChildren) => (
  <a className="underline text-blue-200">{children}</a>
);

export const layoutPrimitives = {
  h1: H1,
  p: P,
  ul: Ul,
  a: A,
};

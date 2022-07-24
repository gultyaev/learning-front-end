import { Link } from "gatsby";
import React from "react";

interface StarterProjectListItemProps {
  data: Queries.StarterProjectsQuery["allMdx"]["nodes"][0];
}

const ComplexityLevel = ({ complexity }: { complexity: string | null }) => {
  const className =
    complexity === "hi"
      ? "bg-red-900"
      : complexity === "med"
      ? "bg-amber-600"
      : "bg-lime-700";

  return (
    <span className="mt-2">
      Complexity level:{" "}
      <span className={`uppercase ${className} py-0.5 px-2 rounded-md`}>
        {complexity}
      </span>
    </span>
  );
};

function StarterProjectListItem({ data }: StarterProjectListItemProps) {
  if (!data.frontmatter) {
    throw new Error("Missing requried content");
  }

  return (
    <article className="flex flex-col border-b-4 border-b-slate-800 pb-4 last:border-0">
      <h2 className="text-2xl mb-1 underline hover:text-amber-500 self-start">
        <Link to={`/project/${data.slug}`}>{data.frontmatter.title}</Link>
      </h2>
      <p>{data.frontmatter.description}</p>

      {data.frontmatter.prerequisites && (
        <div>
          Prerequisites:{" "}
          <ul>
            {data.frontmatter.prerequisites.map((e, i) => (
              <li className="list-disc ml-8" key={i}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ComplexityLevel
        complexity={data.frontmatter.complexity}
      ></ComplexityLevel>
    </article>
  );
}

export default StarterProjectListItem;

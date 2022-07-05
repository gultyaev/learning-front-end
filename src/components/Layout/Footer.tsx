import React from "react";
import Wrapper from "./Wrapper";

function Footer() {
  return (
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
  );
}

export default Footer;

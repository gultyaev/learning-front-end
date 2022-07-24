import React, { PropsWithChildren } from "react";

interface WrapperProps {
  className?: string;
}

function Wrapper({ children, className }: PropsWithChildren<WrapperProps>) {
  return (
    <div className={`px-6 max-w-5xl mx-auto ${className || ""}`}>
      {children}
    </div>
  );
}

export default Wrapper;

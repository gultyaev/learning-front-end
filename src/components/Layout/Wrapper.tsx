import React, { PropsWithChildren } from "react";

interface WrapperProps {
  className?: string;
}

function Wrapper({ children, className }: PropsWithChildren<WrapperProps>) {
  return (
    <div className={`py-4 px-6 max-w-6xl mx-auto ${className || ""}`}>
      {children}
    </div>
  );
}

export default Wrapper;

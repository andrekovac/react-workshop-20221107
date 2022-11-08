import React from "react";

export const name = "Michael";

export const SimpleName: React.FunctionComponent = () => {
  return <p>Hello {name}</p>;
};

export default SimpleName;

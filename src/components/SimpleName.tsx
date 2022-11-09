import React from "react";

export const name = "Michael";

export const SimpleName: React.FunctionComponent = () => {
  return (
    <>
      <p>Mein Name:</p>
      <p>{name}</p>
    </>
  );
};

export default SimpleName;

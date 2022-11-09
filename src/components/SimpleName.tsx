import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const SimpleName = ({ children = "Nichts angegeben" }: Props) => {
  return (
    <>
      <p>Mein Name:</p>
      <p>{children}</p>
    </>
  );
};

export default SimpleName;

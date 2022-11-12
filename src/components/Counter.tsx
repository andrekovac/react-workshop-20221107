import React from "react";
import { useCount } from "../context/count";

const Counter: React.FC = () => {
  const { count, increment } = useCount();

  return (
    <>
      Zahl:
      <button onClick={increment}>{count}</button>
    </>
  );
};

export default Counter;

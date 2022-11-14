import React from "react";
import { useParams } from "react-router-dom";
import { useCount } from "../context/count";

type CounterParams = {
  nr: string;
};

const Counter: React.FC = () => {
  const { nr } = useParams<CounterParams>();
  const { count, increment } = useCount();

  return (
    <>
      <p>Bitte auf die Zahl {nr} inkrementieren:</p>
      Zahl:
      <button onClick={increment}>{count}</button>
    </>
  );
};

export default Counter;

import React, { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<{ count: number }>({ count: 0 });

  // strict equality: ===

  const incrementCount = () => {
    // const tempCounter = counter;
    // tempCounter.count = tempCounter.count + 1;

    setCounter({ ...counter, count: counter.count + 1 });
  };

  console.log("render count");

  return (
    <>
      Zahl:
      <button onClick={incrementCount}>{counter.count}</button>
    </>
  );
};

export default Counter;

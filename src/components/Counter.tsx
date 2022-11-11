import React, { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<{ count: number }>({ count: 0 });

  const incrementCount = () => {
    setCounter({ ...counter, count: counter.count + 1 });
  };

  return (
    <>
      Zahl:
      <button onClick={incrementCount}>{counter.count}</button>
    </>
  );
};

export default Counter;

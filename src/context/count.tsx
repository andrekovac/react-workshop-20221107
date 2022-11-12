import React, { useContext } from "react";

type CounterContextT = {
  count: number;
  increment: () => void;
};

export const CounterContext = React.createContext<CounterContextT>({
  count: 0,
  increment: () => null,
});

export const useCount = () => {
  return useContext(CounterContext);
};

const CounterProvider: React.FC = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const counterValue = {
    count,
    increment: () => setCount(count + 1),
  };

  return (
    <CounterContext.Provider value={counterValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;

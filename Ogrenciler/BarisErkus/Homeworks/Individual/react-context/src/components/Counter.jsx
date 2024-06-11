import { useCounter } from "../context/CounterContext";

const Counter = () => {
  const { count } = useCounter();

  return <div>{count}</div>;
};

export default Counter;

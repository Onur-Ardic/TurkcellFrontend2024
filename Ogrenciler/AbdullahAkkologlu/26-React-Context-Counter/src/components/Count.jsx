import { useCounter } from "../context/CounterContext";

const Count = () => {
  const { count } = useCounter();
  return <h2>Count: {count}</h2>;
};

export default Count;

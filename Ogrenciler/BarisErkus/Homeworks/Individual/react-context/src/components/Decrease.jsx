import { useCounter } from "../context/CounterContext";

const Decrease = () => {
  const { count, setCount } = useCounter();

  return <button onClick={() => setCount(count - 1)}>Azalt</button>;
};

export default Decrease;

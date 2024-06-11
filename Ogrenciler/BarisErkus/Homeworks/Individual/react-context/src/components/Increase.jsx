import { useCounter } from "../context/CounterContext";

const Increase = () => {
  const { count, setCount } = useCounter();

  return <button onClick={() => setCount(count + 1)}>Artır</button>;
};

export default Increase;

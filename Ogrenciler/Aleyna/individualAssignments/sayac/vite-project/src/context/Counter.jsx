import { useCounter } from "./CounterContext";

const Counter = () => {
  const { count, setCount } = useCounter();

  return (
    <div>
      <h2 style={{ color: "white" }}>Sayaç: {count}</h2>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        style={{ backgroundColor: "red", color: "white", marginLeft: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

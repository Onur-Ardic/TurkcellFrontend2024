import { useCounter } from "../context/CounterContext";

const Button = () => {
  const { counter, setCounter } = useCounter();
  return (
    <>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Artır</button>
      </div>
    </>
  );
};

export default Button;

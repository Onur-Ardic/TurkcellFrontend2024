import Button from "../components/Button";
import Count from "../components/Count";
import Title from "../components/Title";
import { useCounter } from "../context/CounterContext";

const CounterView = () => {
  const { count, setCount } = useCounter();
  return (
    <div>
      <Title />
      <Count />
      <Button
        onclick={() => {
          count > 0 && setCount((prev) => prev - 1);
        }}
      >
        -
      </Button>
      <Button onclick={() => setCount((prev) => prev + 1)}>+</Button>
    </div>
  );
};

export default CounterView;

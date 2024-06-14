const CounterButton = ({ increment, decrement }) => {
  return (
    <div className="button-container">
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
    </div>
  );
};

export default CounterButton;


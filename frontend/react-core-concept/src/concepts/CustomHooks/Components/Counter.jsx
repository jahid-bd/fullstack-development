import useCount from "../Hooks/useCount";

const Counter = () => {
  const { count, addCount, subCount } = useCount(5, 0, 10);
  const count2 = useCount(7, 0, 15);
  const count3 = useCount();

  const CounterJsx = ({ count, addCount, subCount }) => {
    return (
      <div>
        <h3>Count : {count}</h3>
        <button onClick={addCount}>ADD</button>
        <button onClick={subCount}>SUB</button>
      </div>
    );
  };

  return (
    <>
      <CounterJsx count={count} addCount={addCount} subCount={subCount} />
      <CounterJsx
        count={count2.count}
        addCount={count2.addCount}
        subCount={count2.subCount}
      />
      <CounterJsx
        count={count3.count}
        addCount={count3.addCount}
        subCount={count3.subCount}
      />
    </>
  );
};

export default Counter;

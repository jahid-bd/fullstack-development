const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Button Clicked {count} times</button>
    </div>
  );
};

export default ClickCounter;

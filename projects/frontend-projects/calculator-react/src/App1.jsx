import { useState } from "react";
import "./App.css";
import shortid from "shortid";
import InputSection from "./components/sections/InputSection";
import OperationSection from "./components/sections/OperationSection";
import HistorySection from "./components/sections/HistorySection";
// function generateId() {
//   let id = 0;

//   while(true) {
//     yield id++;
//   }
// }

// const getId = generateId()

const App = () => {
  const initVal = {
    inputA: 0,
    inputB: 0,
  };

  const [inputValue, setInputValue] = useState({
    ...initVal,
  });

  const [result, setResult] = useState(0);

  const [histories, setHistories] = useState([]);

  const handleInputValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleOperatorBtn = (opt) => {
    // if (!inputValue.inputA || !inputValue.inputB) {
    //   alert("Invalid input field");
    //   return;
    // }

    // const evalFunc = new Function(
    //   'opt',
    //   `return ${inputValue.inputA} ${opt} ${inputValue.inputB}`
    // )

    let result = 0;
    switch (opt) {
      case "+":
        result = Number(inputValue.inputA) + Number(inputValue.inputB);
        break;
      case "-":
        result = inputValue.inputA - inputValue.inputB;
        break;
      case "*":
        result = inputValue.inputA * inputValue.inputB;
        break;
      case "/":
        result = inputValue.inputA / inputValue.inputB;
        break;
      case "%":
        result = inputValue.inputA % inputValue.inputB;
        break;
      default:
        result = 0;
    }

    setResult(result);
    const historyObj = {
      id: shortid.generate(),
      inputs: { ...inputValue },
      operator: opt,
      result,
      date: new Date(),
    };
    setHistories([historyObj, ...histories]);
  };

  const handleClearBtn = () => {
    setInputValue({
      ...initVal,
    });
    setResult(0);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputValue({ ...historyItem.inputs });
    setResult(historyItem.result);
  };

  return (
    <div>
      <div className="result-section">
        <h1 id="result">Result : {result}</h1>
      </div>

      <InputSection handler={handleInputValue} inputValue={inputValue} />

      <OperationSection
        handleOperatorBtn={handleOperatorBtn}
        handleClearBtn={handleClearBtn}
      />

      <HistorySection
        histories={histories}
        restoreBtnHandler={handleRestoreBtn}
      />
      {/* 
      <div className="history-section">
        <h2>History</h2>
        {histories.length !== 0 ? (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <div>
                  <h3>
                    Operation:{" "}
                    {`${historyItem.inputs.inputA} ${historyItem.operator} ${historyItem.inputs.inputB}`}
                    <small style={{ margin: "0 10px" }}>
                      {historyItem.date.toLocaleDateString()}
                      <span style={{ marginLeft: "10px" }}>
                        {historyItem.date.toLocaleTimeString()}
                      </span>
                    </small>
                  </h3>
                  <h3>Result: {historyItem.result}</h3>
                  <div>
                    <button onClick={() => handleRestoreBtn(historyItem)}>
                      Restore
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No History Found</h3>
        )}
      </div> */}
    </div>
  );
};

export default App;

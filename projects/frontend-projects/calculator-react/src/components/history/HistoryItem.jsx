import PropTypes from "prop-types";
import Button from "../ui/Button";

const HistoryItem = ({ historyItem, restoreBtnHandler }) => {
  return (
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
        <Button text="Restore" handler={() => restoreBtnHandler(historyItem)} />
      </div>
    </div>
  );
};

HistoryItem.propTypes = {
  historyItem: PropTypes.object.isRequired,
  restoreBtnHandler: PropTypes.func.isRequired,
};

export default HistoryItem;

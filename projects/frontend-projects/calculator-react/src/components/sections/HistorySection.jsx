import PropTypes from "prop-types";
import HistoryItem from "../history/HistoryItem";

const HistorySection = ({ histories, restoreBtnHandler }) => {
  return (
    <div className="history-section">
      <h2>History</h2>
      {histories.length !== 0 ? (
        <ul>
          {histories.map((historyItem) => (
            <li key={historyItem.id}>
              <HistoryItem
                historyItem={historyItem}
                restoreBtnHandler={restoreBtnHandler}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No History Found</h3>
      )}
    </div>
  );
};

HistorySection.propTypes = {
  histories: PropTypes.arrayOf(PropTypes.object).isRequired,
  restoreBtnHandler: PropTypes.func.isRequired,
};

export default HistorySection;

import Button from "../ui/Button";
import shortid from "shortid";
import PropTypes from "prop-types";

const OperationSection = ({ handleOperatorBtn, handleClearBtn }) => {
  const buttons = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleOperatorBtn("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleOperatorBtn("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleOperatorBtn("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleOperatorBtn("/"),
    },
    {
      id: shortid.generate(),
      text: "Clear",
      onClick: () => handleClearBtn(),
    },
  ];

  return (
    <div className="operations-section">
      {buttons.map((button) => (
        <Button handler={button.onClick} text={button.text} key={button.id} />
      ))}
    </div>
  );
};

OperationSection.propTypes = {
  handleOperatorBtn: PropTypes.func.isRequired,
  handleClearBtn: PropTypes.func.isRequired,
};

export default OperationSection;

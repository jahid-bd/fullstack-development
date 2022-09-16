import Input from "../input/Input";
import PropTypes from "prop-types";

const InputSection = ({ inputValue, handler }) => {
  return (
    <div className="input-section">
      <h3>Input two valid numbers</h3>

      <Input name="inputA" value={inputValue.inputA} handler={handler} />

      <Input name="inputB" value={inputValue.inputB} handler={handler} />
    </div>
  );
};

InputSection.propTypes = {
  inputValue: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
};

export default InputSection;

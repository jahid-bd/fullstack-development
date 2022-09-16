import PropTypes from "prop-types";

const Input = ({ name, handler, value }) => {
  return <input type="number" name={name} value={value} onChange={handler} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Input;

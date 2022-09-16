import PropTypes from "prop-types";

const Button = ({ handler, text }) => {
  return <button onClick={handler}>{text}</button>;
};

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;

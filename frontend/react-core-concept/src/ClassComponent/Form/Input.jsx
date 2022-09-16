import React from "react";

class InputForm extends React.Component {
  render() {
    const { type, name, placeholder, value, handler, error } = this.props;

    return (
      <div className="form-group my-3">
        <label htmlFor={name} style={{ textTransform: "capitalize" }}>
          {name}
        </label>
        <input
          type={type}
          className={!error ? "form-control" : "form-control is-invalid"}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handler}
        />
        {error && <div class="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

export default InputForm;

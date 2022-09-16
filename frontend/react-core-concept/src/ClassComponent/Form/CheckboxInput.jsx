import React from "react";

class CheckboxInput extends React.Component {
  render() {
    const { type, name, value, label, handler, checked, error } = this.props;

    return (
      <div className="form-check">
        <input
          type={type}
          name={name}
          value={value}
          className={error ? "form-check-input is-invalid" : "form-check-input"}
          id={value ? value : name}
          onChange={handler}
          checked={checked}
        />
        <label htmlFor={value ? value : name}>{label}</label>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

export default CheckboxInput;

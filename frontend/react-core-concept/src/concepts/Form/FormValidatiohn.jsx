import { useState } from "react";
import styled from "styled-components";

const background = "#e7e9eb";

const Container = styled.div`
  background-color: ${background};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  width: 70%;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 0.3rem;
`;

const Input = styled.input`
  border: ${(props) =>
    !props.isValid ? "1px solid #e60000" : "1px solid #ccc"};
  background: #fff;
  width: 100%;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  &:focus {
    border: 1px solid #4caf50;
    outline: 1px solid #4caf50;
  }
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.type === "submit" ? "#4CAF50" : "#ff4d4d"};
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 50%;
  &:hover {
    background-color: ${(props) =>
      props.type === "submit" ? "#3e8e41" : "#e60000"};
  }
`;

const InputGroup = ({
  label,
  type,
  name,
  onChange,
  value,
  placeholder,
  error,
  onFocus,
  onBlur,
}) => {
  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <label htmlFor={name} style={{ fontSize: "1rem" }}>
        {label}
      </label>
      <Input
        type={type}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        isValid={!error}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <span style={{ color: "#e60000" }}>{error}</span>}
    </div>
  );
};

const FormValidation = () => {
  const init = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focuses, setFocuses] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const key = e.target.name;
    const { error } = checkValidity(values);

    if (!error[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error: message, isValid } = checkValidity(values);

    if (isValid) {
      console.log(values);
      setValues({ ...init });
      setErrors({ ...init });
    } else {
      setErrors({ ...message });
    }
  };

  const handleClear = () => {
    setValues({ ...init });
  };

  const handleFocus = (e) => {
    setFocuses((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { error, isValid } = checkValidity(values);

    if (!isValid && focuses[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: error[key],
      }));
    }
  };

  const checkValidity = (values) => {
    const error = {};

    if (!values.firstName) {
      error.firstName = "Invalid First Name!";
    }

    if (!values.lastName) {
      error.lastName = "Invalid Last Name!";
    }

    if (!values.email) {
      error.email = "Invalid Email!";
    }

    if (!values.password) {
      error.password = "Invalid Password";
    }

    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  };

  return (
    <Container>
      <h3>From and validation React</h3>
      <form onSubmit={handleSubmit}>
        <InputGroup
          label={"First Name"}
          type={"text"}
          name={"firstName"}
          placeholder={"John"}
          onChange={handleInputChange}
          value={values.firstName}
          error={errors.firstName}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          label={"Last Name"}
          type={"text"}
          name={"lastName"}
          placeholder={"Wick"}
          onChange={handleInputChange}
          value={values.lastName}
          error={errors.lastName}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          label={"Email"}
          type={"email"}
          name={"email"}
          placeholder={"test@example.com"}
          onChange={handleInputChange}
          value={values.email}
          error={errors.email}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          label={"Password"}
          type={"password"}
          name={"password"}
          placeholder={"password"}
          onChange={handleInputChange}
          value={values.password}
          error={errors.password}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          style={{ display: "flex", justifyContent: "around", gap: "1.3rem" }}
        >
          <Button type="submit">Submit</Button>
          <Button type="reset" onClick={handleClear}>
            Reset
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default FormValidation;

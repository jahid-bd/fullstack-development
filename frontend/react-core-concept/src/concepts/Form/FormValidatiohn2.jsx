import { useState } from "react";
import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
import InputGroup from "./components/form/InputGroup";

const FormValidation = () => {
  const init = {
    firstName: {
      value: "",
      error: "",
      focus: false,
    },
    lastName: {
      value: "",
      error: "",
      focus: false,
    },
    email: {
      value: "",
      error: "",
      focus: false,
    },
    password: {
      value: "",
      error: "",
      focus: false,
    },
  };

  const [state, setState] = useState({ ...init });

  const handleInputChange = (e) => {
    const key = e.target.name;

    // setState((prev) => ({
    //   ...prev,
    //   [key]: {
    //     ...prev[key],
    //     value: e.target.value,
    //   },
    // }));

    const oldState = deepClone(state);
    oldState[key].value = e.target.value;

    const values = stateToValue(oldState);
    const { error } = checkValidity(values);

    if (!error[key]) {
      oldState[key].error = "";
    }

    setState({ ...oldState });
  };

  const stateToValue = (state) => {
    return Object.keys(state).reduce((acc, cur) => {
      acc[cur] = state[cur].value;

      return acc;
    }, {});
  };

  const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = stateToValue(state);
    const { error, isValid } = checkValidity(values);

    if (isValid) {
      console.log(state);
      setState({ ...init });
    } else {
      const oldState = deepClone(state);

      Object.keys(oldState).map((key) => (oldState[key].error = error[key]));

      setState({ ...oldState });
      console.log(error);
    }
  };

  const handleClear = () => {
    setState({ ...init });
  };

  const handleFocus = (e) => {
    const key = e.target.name;

    const oldState = deepClone(state);
    oldState[key].focus = true;

    setState(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const values = stateToValue(state);
    const { error, isValid } = checkValidity(values);
    const oldState = deepClone(state);

    if (!isValid && oldState[key].focus) {
      oldState[key].error = error[key];
    } else {
      oldState[key].error = "";
    }

    setState({ ...oldState });
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
          value={state.firstName.value}
          error={state.firstName.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          label={"Last Name"}
          type={"text"}
          name={"lastName"}
          placeholder={"Wick"}
          onChange={handleInputChange}
          value={state.lastName.value}
          error={state.lastName.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          label={"Email"}
          type={"email"}
          name={"email"}
          placeholder={"test@example.com"}
          onChange={handleInputChange}
          value={state.email.value}
          error={state.email.error}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup
          label={"Password"}
          type={"password"}
          name={"password"}
          placeholder={"password"}
          onChange={handleInputChange}
          value={state.password.value}
          error={state.password.error}
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

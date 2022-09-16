import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
import InputGroup from "./components/form/InputGroup";
import useForm from "./hooks/useForm";

const validate = (values) => {
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

  return error;
};

const FormValidation = () => {
  const init = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const {
    formState: state,
    handleChange: handleInputChange,
    handleBlur,
    handleFocus,
    handleSubmit,
    clear: handleClear,
  } = useForm({ init, validate });

  const cb = ({ hasError, errors, values }) => {
    if (hasError) {
      console.log(errors);
    } else {
      console.log(values);
    }
  };

  return (
    <Container>
      <h3>From and validation React</h3>
      <form onSubmit={(e) => handleSubmit(e, cb)}>
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

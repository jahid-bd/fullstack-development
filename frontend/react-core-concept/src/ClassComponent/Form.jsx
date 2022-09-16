import React from "react";

import InputForm from "./ClassComponent/Form/Input";

import CheckboxInput from "./ClassComponent/Form/CheckboxInput";

const initValue = {
  name: "",
  email: "",
  birthDate: "",
  password: "",
  gender: "",
  skills: [],
};

class SignUpForm extends React.Component {
  state = {
    values: initValue,
    agree: false,
    error: {},
  };

  handleChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleCheck = (e) => {
    this.setState({
      agree: e.target.checked,
    });
  };

  handleSkillCheck = (e) => {
    if (e.target.checked) {
      this.setState({
        values: {
          ...this.state.values,
          skills: [...this.state.values.skills, e.target.value],
        },
      });
    } else {
      const skills = this.state.values.skills.filter(
        (skill) => skill !== e.target.value
      );
      this.setState({
        values: {
          ...this.state.values,
          skills,
        },
      });
    }
  };

  errorHandle() {
    const { name, email, birthDate, password, gender, skills } =
      this.state.values;
    const error = {};

    if (!name) {
      error.name = "Please Enter a valid Name!";
    }

    if (!email) {
      error.email = "Please Enter a valid Email!";
    }

    if (!birthDate) {
      error.birthDate = "Please Enter a valid Birth Date!";
    }

    if (!password) {
      error.password = "Please Enter a valid Password!";
    }

    if (!gender) {
      error.gender = "Please select a Gender!";
    }

    if (!skills) {
      error.skills = "Please select at lest one skill!";
    }

    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { error, isValid } = this.errorHandle();

    if (isValid) {
      console.log(this.state);

      // this.props.createUsers(this.state.values);
      const { createUsers } = this.props;

      createUsers(this.state.values);

      e.target.reset();

      this.setState({
        values: initValue,
        error: {},
      });
    } else {
      this.setState({
        error,
      });
    }
  };

  render() {
    const {
      values: { name, email, birthDate, password, skills },
      error,
    } = this.state;
    const { agree } = this.state;
    return (
      <div>
        <div className="card">
          <h1 className="text-center">Signup Form</h1>
        </div>

        <div className="container">
          <form
            className="card p-4"
            style={{ width: "60%", margin: "50px auto" }}
            onSubmit={this.handleSubmit}
          >
            <InputForm
              type="text"
              name="name"
              placeholder="Input your name"
              value={name}
              error={error.name}
              handler={this.handleChange}
            />

            <InputForm
              type="text"
              name="email"
              placeholder="Input your email"
              value={email}
              error={error.email}
              handler={this.handleChange}
            />

            <InputForm
              type="date"
              name="birthDate"
              value={birthDate}
              error={error.birthDate}
              handler={this.handleChange}
            />

            <InputForm
              type="password"
              name="password"
              value={password}
              error={error.password}
              placeholder="Set a valid password"
              handler={this.handleChange}
            />

            <div className="form-group">
              <label htmlFor="">Skills</label>

              <CheckboxInput
                type="checkbox"
                name="skills"
                value="Javascript"
                label="Javascript"
                error={error.skills}
                handler={this.handleSkillCheck}
                checked={skills.includes("Javascript")}
              />

              <CheckboxInput
                type="checkbox"
                name="skills"
                value="Java"
                label="Java"
                error={error.skills}
                handler={this.handleSkillCheck}
                checked={skills.includes("Java")}
              />

              <CheckboxInput
                type="checkbox"
                name="skills"
                value="Python"
                error={error.skills}
                label="Python"
                handler={this.handleSkillCheck}
                checked={skills.includes("Python")}
              />

              <CheckboxInput
                type="checkbox"
                name="skills"
                value="goLang"
                label="goLang"
                error={error.skills}
                handler={this.handleSkillCheck}
                checked={skills.includes("goLang")}
              />
            </div>

            <div className="form-group my-3">
              <label htmlFor="">Gender</label>

              <CheckboxInput
                type="radio"
                name="gender"
                error={error.gender}
                value="male"
                handler={this.handleChange}
                label="Male"
              />

              <CheckboxInput
                type="radio"
                name="gender"
                value="female"
                error={error.gender}
                handler={this.handleChange}
                label="Female"
              />

              <CheckboxInput
                type="radio"
                name="gender"
                error={error.gender}
                value="other"
                handler={this.handleChange}
                label="Other"
              />
            </div>

            <CheckboxInput
              type="checkbox"
              name="agree"
              handler={this.handleCheck}
              label="I Agree"
            />

            <div className="form-group ">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={!agree}
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;

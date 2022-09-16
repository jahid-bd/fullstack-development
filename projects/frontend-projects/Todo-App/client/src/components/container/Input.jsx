import React from "react";
import shortId from "shortid";

class Input extends React.Component {
  initialValue = {
    id: shortId.generate(),
    createdAt: new Date(),
    title: "",
    dueDate: "",
    isCompleted: false,
  };

  state = {
    data: this.initialValue,
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  addBtnHandler = (e) => {
    const { errors, isValid } = this.errorHandle();

    if (isValid) {
      console.log(this.state);
      this.setState({
        data: this.initialValue,
      });
    } else {
      console.log(errors);
      this.setState({
        errors,
      });
    }
  };

  errorHandle = () => {
    const { title } = this.state.data;

    let errors = {};

    if (!title) {
      errors.title = "Please provide a valid task name!";
    } else if (title.length < 3) {
      errors.title = "Task title must be at lest 3 chars!";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  render() {
    return (
      <>
        {/* <!-- Create todo section --> */}
        <div className="row m-1 p-3">
          <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div className="col">
                <input
                  className={`form-control form-control-lg border-0 add-todo-input bg-transparent rounded ${
                    this.state.errors.title && "is-invalid"
                  }`}
                  type="text"
                  placeholder="Add new .."
                  name="title"
                  value={this.state.data.title}
                  onChange={this.handleChange}
                />
                {this.state.errors.title && (
                  <div className="invalid-feedback">
                    {this.state.errors.title}
                  </div>
                )}
              </div>

              <div className="col-auto m-0 px-2 d-flex align-items-center">
                <input
                  type="date"
                  name="dueDate"
                  className="form-control"
                  title="Set a Due date"
                  value={this.state.data.dueDate}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-auto px-0 mx-0 mr-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.addBtnHandler}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      </>
    );
  }
}

export default Input;

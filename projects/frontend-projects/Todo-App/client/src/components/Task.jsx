import React from "react";

/**
 * ____Props___
 * Created Date
 * Title
 * Due date
 *
 *
 * States
 * IsCompleted
 * Input Text
 */

class Task extends React.Component {
  render() {
    return (
      <>
        <div className="row px-3 align-items-center todo-item rounded border-black-25 border-bottom">
          {/* Check Section */}
          <div className="col-auto m-1 p-0 d-flex align-items-center ">
            <h3 className="m-0 p-0">
              <input
                class="form-check-input "
                type="checkbox"
                title="Mark as Complete"
                // title="Mark as Todo"
                value=""
                style={{ border: "2px solid #0d6efd", cursor: "pointer" }}
              />
            </h3>
          </div>

          {/* Input Text Section */}
          <div className="col px-1 m-1 d-flex align-items-center ">
            <input
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3 disabled"
              readonly
              value="Buy groceries for next week"
              title="Buy groceries for next week"
            />
            <input
              type="text"
              className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
              value="Buy groceries for next week"
            />
          </div>

          <div className="col-auto m-1 p-0 px-3">
            <div className="row">
              <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
                <i
                  className="fa fa-hourglass-2 my-2 px-2 text-warning btn"
                  data-placement="bottom"
                  title="Due on date"
                ></i>
                <h6 className="text my-2 pr-2">28th Jun 2020</h6>
              </div>
            </div>
          </div>

          {/* Edit & Delele */}
          <div className="col-auto m-1 p-0 todo-actions">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-6 text-center">
                <h5 className="m-0 p-0 px-2">
                  <i
                    className="fa fa-pencil text-info btn m-0 p-0"
                    data-placement="bottom"
                    title="Edit todo"
                  ></i>
                </h5>
              </div>
              <div className="col-6 text-left">
                <h5 className="m-0 p-0 px-2">
                  <i
                    className="fa fa-trash-o text-danger btn m-0 p-0"
                    data-placement="bottom"
                    title="Delete todo"
                  ></i>
                </h5>
              </div>
            </div>

            {/* Created Info */}
            <div className="row todo-created-info">
              <div className="col-auto d-flex align-items-center pr-2">
                <i
                  className="fa fa-info-circle my-2 px-2 text-black-50 btn"
                  data-placement="bottom"
                  title="Created date"
                ></i>
                <label className="date-label my-2 text-black-50">
                  28th Jun 2020
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Task;

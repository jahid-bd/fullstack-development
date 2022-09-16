import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todoConstants";

const initialTodosState = {
  todoItems: [],
  loading: false,
  error: null,
};

const todosReducer = (state = initialTodosState, action) => {
  switch (action.key) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        todoItems: action.payload,
        loading: false,
        error: null,
      };
    case GET_TODOS_FAILED:
      return {
        todoItems: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todosReducer;

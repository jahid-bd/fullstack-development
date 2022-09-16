const { createStore } = require("redux");

// State
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  users: [{ name: "Jahid Hasan" }],
};

//action - Object - type, payload
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_VALUE = "INCREMENT_VALUE";

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_VALUE,
    payload: value,
  };
};

// create reducer for counter, reducer is a pure function

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case INCREMENT_VALUE: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }

    default:
      state;
  }
};

// 1. state
// 2. dispatch action
// 3. reducer work based on action type
// 4. store - getState(), dispatch(), subscribe

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
store.dispatch(incrementCounterByValue(10));

/**
 * Store - The responsibilities of store is storing state through creteStore() method this method recive reducer
 
 * Reducer - Reducer is a pure function that recive two arguments that is state or action, the responsibilites of reducer is update state thorough action type
 
 * Action - Action is the way of when we need to update state, this action occures through store.dispatch() method and this method recive action types. Another action is subscribe that is reciver of state and we can recive state with store.getState() method

 */

import { createStore, action } from "easy-peasy";

const counterModel = {
  count: 0,
  incrementCount: action((state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  decrementCount: action((state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  resetCount: action((state) => {
    return {
      ...state,
      count: 0,
    };
  }),
  increOrDecreBy: action((state, payload) => {
    return {
      ...state,
      count: state.count + Number(payload),
    };
  }),
};

const store = createStore(counterModel);

export default store;

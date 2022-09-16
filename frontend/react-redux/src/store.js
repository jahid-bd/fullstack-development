// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import todosReducer from "./services/reducers/todosReducer";

// const store = createStore(todosReducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/counter/CounterSlice";
import postSlice from "./features/posts/postSlice";

const store = configureStore({
  reducer: { counter: CounterSlice, posts: postSlice },
});

export default store;

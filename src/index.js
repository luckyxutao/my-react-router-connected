import React from "react";
import ReactDOM from "react-dom";
import Counter from "./page/Counter";
import Counter2 from "./page/Counter2";
import { Provider } from "./react-redux";

import { createStore, applyMiddleware } from "./redux";
import reducers from "./page/reducers";

const store = createStore(
  reducers,applyMiddleware(loggerMiddleware)
);
ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <Counter2 />
  </Provider>,
  document.getElementById("root")
);

function thunkMiddleware(store) {
  return function(next) {
    return function(action) {
      next(action);
    };
  };
}

function loggerMiddleware(store) {
  return function(next) {
    return function(action) {
      console.log('before',store.getState())
      next(action);
      console.log('after',store.getState())
    };
  };
}

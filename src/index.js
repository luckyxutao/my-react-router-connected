import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { Link,Route,Switch } from "react-router-dom";
import { ConnectedRouter,routerMiddleware } from "connected-react-router";
import Counter from "./page/Counter";
import Counter2 from "./page/Counter2";
import { Provider } from "react-redux";
// import { Provider } from "./react-redux";

import { createStore, applyMiddleware } from "redux";
// import { createStore, applyMiddleware } from "./redux";
import createRootReducer from "./page/reducers";
const history = createHashHistory();
const reducers = createRootReducer(history);
const store = createStore(reducers, applyMiddleware(routerMiddleware(history),loggerMiddleware));
// const store = createStore(reducers, applyMiddleware(loggerMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/counter2" component={Counter2} />
        <Route path="/counter" render={() => <Counter />} />
    </ConnectedRouter>
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
      console.log("before", store.getState());
      next(action);
      console.log("after", store.getState());
    };
  };
}

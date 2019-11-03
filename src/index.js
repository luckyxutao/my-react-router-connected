import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './page/Counter';
import Counter2 from './page/Counter2';
import {Provider,Context} from './react-redux';

import { createStore } from "./redux";
import reducers from "./page/reducers";

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <Counter />
        <Counter2 />
    </Provider>
    ,document.getElementById('root')
)

function thunkMiddleware(store) {
  return function(next) {
    return function(action) {
      next(action);
    };
  };
};

function loggerMiddleware(store) {
    return function(next) {
      return function(action) {
        next(action);
      };
    };
  };
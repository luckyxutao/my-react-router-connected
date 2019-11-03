import { createStore, applyMiddleware } from "../redux";
import reducers from "./reducer";

const thunkMiddleware = function(store) {
  return function(next) {
    return function(action) {
      next(action);
    };
  };
};

const loggerMiddleware = function(store) {
    return function(next) {
      return function(action) {
        next(action);
      };
    };
  };


// const store = createStore(reducers);
const store =  createStore(reducers,[thunkMiddleware,loggerMiddleware]);
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "INCREMENT" });

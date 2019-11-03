import Counter from "./Counter/reducer";
import Counter2 from "./Counter2/reducer";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
// import { combineReducers } from "../redux";

const createRootReducer = history => {
  return combineReducers({
    Counter,
    Counter2,
    router: connectRouter(history)
  });
};
export default createRootReducer;

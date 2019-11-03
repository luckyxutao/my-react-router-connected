import Counter from "./Counter/reducer";
import Counter2 from "./Counter2/reducer";
import { combineReducers } from "../redux";
export default combineReducers({
  Counter,
  Counter2
});

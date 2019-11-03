import { CALL_HISTORY_METHOD } from "./constants";
export default function(history) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type !== CALL_HISTORY_METHOD) {
          return next(action);
        }
        let { method, path } = action.payload;
        history[method](path);
      };
    };
  };
}

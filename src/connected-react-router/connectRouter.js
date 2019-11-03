import { LOCATION_CHANGE } from "./constants";
export default function(history) {
  const initialState = {
    location: history.location,
    action: history.action
  };
  return function(state = initialState, action) {
    if (action.type === LOCATION_CHANGE) {
      return {
        location: action.payload.location,
        action: action.payload.action
      };
    }
    return state;
  };
}

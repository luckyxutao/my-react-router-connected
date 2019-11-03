/**
 * const INIT_STATE = {
 *     a : 1
 * }
 * function CounterReducer(state=INIT_STATE,action){
 *    switch(action.type){
 *       case 1
 *          return {
 *             ...state,
 *              xxx : 1
 *          }
 *       case 2
 *          return {
 *             ...state,
 *              xxx : 1
 *          }
 *       default:
 *         return state
 *    }
 * }
 *
 * const INIT_STATE = {
 *     c : 1
 * }
 * function HomeReducer(state=INIT_STATE,action){
 *    switch(action.type){
 *       case 1
 *          return {
 *             ...state,
 *              xxx : 1
 *          }
 *       case 2
 *          return {
 *             ...state,
 *              xxx : 1
 *          }
 *       default:
 *         return state
 *    }
 * }
 * const reducers = combinReducers({
 *      Counter: CounterReducer,
 *      Home : HomeReduer
 * });
 *
 * const currentState = {
 *    Counter:{
 *      aaa:22
 *    },
 *    Home:{
 *      bbb:x
 *    }
 * }
 * const combinedReducers = {
 *
 *
 * }
 *
 *
 *
 */
import ActionTypes from "./utils/actionTypes";
export default function createStore(reducer, preloadedState, enhancer) {

  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error("Expected the enhancer to be a function.");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = [];
  // let nextListeners = currentListeners
  let isDispatching = false;

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    if (isDispatching) {
      throw new Error("");
    }

    let isSubscribed = true;
    currentListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      isSubscribed = false;
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }
  /**
   *
   * @param {plainObject} action
   * {type:xxxx}
   */
  function dispatch(action) {
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    for (let index = 0; index < currentListeners.length; index++) {
      currentListeners[index]();
    }
    return action;
  }
  dispatch({ type: ActionTypes.INIT });
  return {
    dispatch,
    subscribe,
    getState
  };
}

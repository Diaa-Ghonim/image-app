function createStore(reducer, preloadedState, enhancer) {
  let state = preloadedState;
  const listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  dispatch({ type: '@@redux/INIT' });

  return { dispatch, subscribe, getState };
}

/**
 * other utility to generate random string
 */

const randomString = () =>
  Math.random().toString(36).substring(7).split('').join('.');

/**
 *
 * @param {*} obj
 * check if obj is plain object or not
 */

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

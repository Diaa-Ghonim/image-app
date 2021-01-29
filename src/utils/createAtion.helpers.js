const createAction = function (type, ...rest) {
  const payload = {};
  const action = { type };

  return function addArgs(...args) {
    if (!args || args.length === 0) return action;
    for (let [i, key] of rest.entries()) {
      payload[key] = args[i];
    }
    action['payload'] = payload;
    return action;
  };
};

const createActionTypes = function (actionName) {
  actionName = actionName.toUpperCase();
  return {
    LOADING: `${actionName}_LOADING`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    ACTION: actionName,
  };
};
export { createAction, createActionTypes };

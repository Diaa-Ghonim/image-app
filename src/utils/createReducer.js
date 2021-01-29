const createReducer = function (initialState, handlers) {
  return function (state = initialState, { type, payload }) {
    if (handlers[type]) return handlers[type](state, payload);
    else return state;
  };
};

export { createReducer };

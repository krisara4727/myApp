export const createReducer = (
    initialState: any,
    handlers: { [type: string]: (state: any, action: any) => any },
  ) => {
    return function reducer(state = initialState, action: any) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      } else {
        return state;
      }
    };
  };
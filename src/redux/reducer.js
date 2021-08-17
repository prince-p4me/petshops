import * as Types from "./Types";

export const getCatsList = (state = [], action) => {
  switch (action.type) {
    case Types.CATS:
      return [...state, { ...action.payload, id: (state.length + 1) }];
    case Types.UPDATE_CAT:
      state.forEach((item, index) => {
        if (item.id == action.payload.id) {
          state[index] = action.payload;
        }
      });
      return [...state];
    case Types.DELETE_CAT:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
};

export const getCat = (state = {}, action) => {
  switch (action.type) {
    case Types.CAT:
      return action.payload;
    default:
      return state;
  }
};
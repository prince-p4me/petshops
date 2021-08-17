import * as Types from "./Types";

export function setCatsList(payload) {
  return {
    type: Types.CATS,
    payload,
  };
}

export function setCat(payload) {
  return {
    type: Types.CAT,
    payload,
  };
}

export function updateCat(payload) {
  return {
    type: Types.UPDATE_CAT,
    payload,
  };
}

export function deleteCat(payload) {
  return {
    type: Types.DELETE_CAT,
    payload,
  };
}
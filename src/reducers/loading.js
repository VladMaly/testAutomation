import { LOADING_ON, LOADING_OFF } from "../constants/actionTypes";

const intialState = { isLoading: false };
export const loading = (state = intialState, action) => {
  switch (action.type) {
    case LOADING_ON:
      return { ...state, isLoading: true };
    case LOADING_OFF:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

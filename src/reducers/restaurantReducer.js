import { SELECT_CUISINE_TYPE } from "./constants";

export const initialState = {
  selectedCuisine: "",
};

export const restaurantReducer = (state, action) => {
  switch (action.type) {
    case SELECT_CUISINE_TYPE:
      return {
        ...state,
        selectedCuisine: action.payload
      }

    default:
      return state;
  }
};

import { restaurantsData } from "../data/data";
import { ADD_REVIEW, SELECT_CUISINE_TYPE } from "./constants";

export const initialState = {
  selectedCuisine: "",
  restaurants: restaurantsData || []
};

export const restaurantReducer = (state, action) => {
  switch (action.type) {
    case SELECT_CUISINE_TYPE:
      return {
        ...state,
        selectedCuisine: action.payload
      }
    case ADD_REVIEW: 
      return {
        ...state,
        restaurants: state.restaurants.map(res => res.id.toString() === action.payload.resId.toString() ? {...res, ratings: [...res.ratings, {...action.payload.review}]} : res)
      }
    default:
      return state;
  }
};

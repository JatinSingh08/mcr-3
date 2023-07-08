import React, { createContext, useReducer } from "react";
import { initialState, restaurantReducer } from "../reducers/restaurantReducer";

export const RestaurantContext = createContext();
const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  console.log(state.restaurants)
  return (
    <RestaurantContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;

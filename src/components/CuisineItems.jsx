import React, { useContext } from "react";
import { RestaurantContext } from "../context/restaurant-context";
import { restaurantsData } from "../data/data";
import { Link } from "react-router-dom";

const CuisineItems = () => {
  const { state } = useContext(RestaurantContext);
  console.log("selected cusiine", state.selectedCuisine);
  const restaurantCuisines = restaurantsData?.filter(
    (res) => res.cuisine_id?.toString() === state?.selectedCuisine?.toString()
  );

  console.log({ restaurantCuisines });
  return (
    <div>
      {restaurantCuisines?.map((restaurant) => {
        return (
          <div className="text-start">
            <Link to={`/restaurant/${restaurant?.id}`} className="text-xl font-semibold underline">
              Dishes by {restaurant?.name}
            </Link>
            <div className="flex gap-3">
              {restaurant?.menu?.map((item) => (
                <div className="border-gray-400 p-2">
                  <img src={item?.imgSrc} alt={item?.name} className="h-40" />
                  <div>
                    <h1 className="text-lg font-medium ">{item?.name}</h1>
                    <p>{item?.price} for one</p>
                    <p>{restaurant?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CuisineItems;

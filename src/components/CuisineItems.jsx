import React, { useContext } from "react";
import { RestaurantContext } from "../context/restaurant-context";
import { Link, useNavigate } from "react-router-dom";

const CuisineItems = () => {
  const { state } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const restaurantCuisines = state?.restaurants?.filter(
    (res) => res.cuisine_id?.toString() === state?.selectedCuisine?.toString()
  );

  return (
    <div>
      {restaurantCuisines?.map((restaurant) => {
        return (
          <div className="text-start mt-2" key={restaurant.id}>
            <Link to={`/restaurant/${restaurant?.id}`} className="text-2xl font-semibold underline">
              Dishes by {restaurant?.name}
            </Link>
            <div className="flex gap-3">
              {restaurant?.menu?.map((item, index) => (
                <div className="border-gray-400 rounded-lg mt-2"
                key={index}
                onClick={() => navigate(`/restaurant/${restaurant?.id}`)}
                >
                  <img src={item?.imgSrc} alt={item?.name} className="h-40 cursor-pointer" />
                  <div className="p-2 border">
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

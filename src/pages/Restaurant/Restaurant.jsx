import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { restaurantsData } from "../../data/data";
import ReviewModal from "../../components/ReviewModal";

const Restaurant = () => {
  const { resId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const restaurant = restaurantsData?.find(
    (res) => res.id.toString() === resId.toString()
  );
  return (
    <div className="relative">

      <div className="mx-36 flex-col items-center justify-center text-start">
      <Link to='/' className="text-4xl mb-4">🔙</Link>

        <h1 className="text-4xl font-bold">{restaurant?.name}</h1>
        <div className="flex items-center justify-between">
          <div className="flex-col text-start">
            <p>{[...restaurant?.menu.map((item) => item.name)].join(" ,")}</p>
            <p>{restaurant?.address}</p>
            <p>Average Rating: {restaurant?.averageRating}</p>
          </div>
          <button className="bg-red-500 px-4 py-1 rounded-lg text-slate-50"
          onClick={() => setIsModalOpen(true)}
          >
            Add Review
          </button>
        </div>
        <hr className="mt-4" />
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Reviews</h1>
          {
            restaurant?.ratings?.map((review, index) => (
              <div className="flex-col mt-4 border-b" key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <img src={review?.pp} alt={review?.revName} className="w-6 h-6 rounded-full object-contain"/>
                    <h1 className="text-xl font-semibold">{review?.revName ? review?.revName : 'Anonymous'}</h1>
                  </div>
                  <div className="bg-blue-500 rounded-lg text-slate-50 px-2 py-1">
                    {review?.rating?.toString()}⭐
                  </div>
                </div>
                <h1 className="text-xl ">{review?.comment}</h1>
              </div>
            ))
          }
        </div>

      </div>
        {
          isModalOpen && (
            <ReviewModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            />
          )
        }
      
    
    </div>
  );
};

export default Restaurant;

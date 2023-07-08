import React, { useContext } from 'react'
import { RestaurantContext } from '../../context/restaurant-context'
import { SELECT_CUISINE_TYPE } from '../../reducers/constants';
import CuisineItems from '../../components/CuisineItems';

const Home = () => {
  const {dispatch } = useContext(RestaurantContext);
  return (
    <div className="flex-col justify-center items-center">
    <h1 className="text-4xl font-bold underline">Food Ordering App</h1>
    <h1 className="text-xl font-semibold mt-5">Select your cuisine:</h1>
    <div className="flex gap-4 items-center justify-center mt-4">
      <button
        className="px-5 bg-red-500 text-slate-50 rounded-xl py-1 hover:bg-red-600 transition-all duration-300 ease-in-out"
        onClick={() =>
          dispatch({ type: SELECT_CUISINE_TYPE, payload: '1' })
        }
      >
        Italian
      </button>
      <button
        className="px-5 bg-red-500 text-slate-50 rounded-xl py-1 hover:bg-red-600 transition-all duration-300 ease-in-out"
        onClick={() =>
          dispatch({ type: SELECT_CUISINE_TYPE, payload: '2' })
        }
      >
        Mexican
      </button>
      <button
        className="px-5 bg-red-500 text-slate-50 rounded-xl py-1 hover:bg-red-600 transition-all duration-300 ease-in-out"
        onClick={() =>
          dispatch({ type: SELECT_CUISINE_TYPE, payload: '3' })
        }
      >
        Chinese
      </button>
      <button
        className="px-5 bg-red-500 text-slate-50 rounded-xl py-1 hover:bg-red-600 transition-all duration-300 ease-in-out"
        onClick={() =>
          dispatch({ type: SELECT_CUISINE_TYPE, payload: '4' })
        }
      >
        Indian
      </button>
    </div>
    <CuisineItems />

  </div>
  )
}

export default Home

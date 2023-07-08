import React, { useContext, useEffect, useId, useRef, useState } from 'react'
import { RestaurantContext } from '../context/restaurant-context';
import { ADD_REVIEW } from '../reducers/constants';
import { useParams } from 'react-router-dom';

const ReviewModal = ({ isModalOpen, setIsModalOpen}) => {
  const modalRef = useRef(null);  
  const [review, setReview] = useState({
    rating: null,
    comment: ''
  })
  const { dispatch } = useContext(RestaurantContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { resId } = useParams();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_REVIEW, payload: {review: review, resId: resId}})
    closeModal();
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-600 bg-opacity-75">
    {isModalOpen && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div ref={modalRef} className="bg-white w-[20vw] p-2 rounded-lg shadow-lg md:w-[60vw] md:h-[80vh] sm:w-[80vw] ">
          <h2 className="text-xl font-semibold mb-4 md:mb-2 underline underline-offset-4">Add Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 md:grid-cols-1 sm:gap-1 gap-2 ">
              <label htmlFor="rating" className="flex items-center justify-center gap-4 mb-2">
                Rating:
                <select name="rating" id="rating" className='flex items-center justify-between'
                onChange={(e) => setReview(val => setReview({...val, rating: parseInt(e.target.value)}))}
                val={review?.rating}
                >
                  <option value={1} className='border w-4 h-2'>1</option>
                  <option value={2} className='border w-4 h-2'>2</option>
                  <option value={3} className='border w-4 h-2'>3</option>
                  <option value={4} className='border w-4 h-2'>4</option>
                  <option value={5} className='border w-4 h-2'>5</option>
                </select>
              </label>

              <label htmlFor="review" className="flex items-center justify-center gap-4 mb-2">
                Review:
                <textarea
                  id="review"
                  type="text"
                  placeholder="comment here"
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full mt-1"
                  required
                  value={review?.comment}
                  onChange={(e) => setReview(val => setReview({...val, comment: e.target.value}))}
                />
              </label>

            </div>
           

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  )
}

export default ReviewModal

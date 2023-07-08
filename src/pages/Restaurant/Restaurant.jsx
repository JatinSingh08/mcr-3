import React from 'react'
import { useParams } from 'react-router-dom'

const Restaurant = () => {
  const { resId } = useParams();
  return (
    <div>
      rstaurant page for { resId } 
    </div>
  )
}

export default Restaurant

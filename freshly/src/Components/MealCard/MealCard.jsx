import React from 'react';
import "./mealcard.css";

const MealCard = ({item}) => {
  return (
    <div className='mCard'>
        <div className='imgDiv'><img src={item.img_1} alt="" className='proImg'/></div>
        <h3 className='proHead'>{item.title}</h3>
        <p className='proDes'>{item.calories}Cal | Gluten Free | Single-Serve</p>
    </div>
  )
}

export default MealCard
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;
    return (
        <div className='review-item'>
            <h2 className='name'>{name}</h2>
            <h2>Quantity :{quantity}</h2>
            <h2>Price: {price}$</h2>
            <br/>
            <button 
            onClick={() => props.removeItem(key)}
            className='main-button'>Remove Item</button>
        </div>
    );
};

export default ReviewItem;
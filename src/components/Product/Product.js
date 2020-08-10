import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, price, seller, img, key } = props.product;
    return (
        <div className='product'>

            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4><Link to={'/product/'+ key}>{name}</Link></h4>
                <h4>Price: {price}</h4>
                <h4>by: {seller}</h4>
                {props.showAddToCart && <button 
                className='main-button'
                onClick={()=> props.addProductHandler(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>

        </div>
    );
};

export default Product;
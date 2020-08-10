import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
const auth = useAuth();
const [cart,setCart] = useState([]);
const [placeOrder , setPlaceOrder] = useState(false);


    useEffect(()=>{
            const cartObject = getDatabaseCart();
            const productKeys = Object.keys(cartObject);
            const allCartProducts = productKeys.map(key => {
                const product = fakeData.find(pd => pd.key===key);
                product.quantity = cartObject[key];
                return product;
            }) 
            setCart(allCartProducts);

    },[]);

    const removeItem = (productKey) => {
            const newCart = cart.filter(pd => pd.key !== productKey);
            setCart(newCart);
            removeFromDatabaseCart(productKey);
    }


    // **** SHOWING HAPPY IMAGE BY CLICK order place button .... this is previous code before shipment 
    // const handlePlaceOrder = () => {
    //     setCart([]);
    //     setPlaceOrder(true);
    //     processOrder();
    // }

    // let thankyou;

    // if(placeOrder){
    //     thankyou = <img src={happyImage} alt=""/>
    // }

    return (
     <div className='twin-container'>
            <div className='product-container'>
        
        {
            cart.map(pd => <ReviewItem
                
                key={pd.key}
                product={pd}
                removeItem={removeItem}

                ></ReviewItem>)

        }
        {/* {
            thankyou
        } */}

      {
          
          !cart.length && <h1>Your cart is empty.Keep shopping</h1>
      }
    </div>

    <div className='cart-container'>
        <Cart cart={cart}>

        <Link to='shipment'>

            {
                auth.user?<button className='main-button'>Proceed Checkout</button> : <button className='main-button'>Login to Proceed</button>
            }
            </Link>
        </Cart>
    </div>

     </div>
    );
};

export default Review;
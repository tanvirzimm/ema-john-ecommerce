import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const firstTen = fakeData.slice(0,10);    
    
const [products,setProducts] = useState([]);
const [cart,setCart] = useState([]);

useEffect(()=>{
    const savedCart = getDatabaseCart();
    const savedCartKeys = Object.keys(savedCart);
    const savedAllProducts = savedCartKeys.map(key => {
              const product = fakeData.find(pd => pd.key === key);
              product.quantity = savedCart[key];
              return product;
    });
    setCart(savedAllProducts);
},[]);

useEffect(()=>{
    setProducts(firstTen);
},[]);




const addProductHandler = (product) => {

    const sameProduct = cart.find(pd => pd.key === product.key);
    let newCart;
    let count = 1;
    if(sameProduct){
        count = sameProduct.quantity+1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== sameProduct.key);
        newCart = [...others,sameProduct];
    }
    else{
        product.quantity=count;
        newCart = [...cart,product];
    }
setCart(newCart);
addToDatabaseCart(product.key,count)
}

    return (
        <div className='twin-container'>
            <div className="product-container">
           
               {
                   products.map(pd => <Product
                    key={pd.key}
                    showAddToCart={true}
                    product={pd}
                    addProductHandler={addProductHandler}
                      ></Product>)
               }
          
            </div>

               <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/review'><button className='main-button'>Order review</button></Link>
                    </Cart>
               </div>

         
        </div>
    );
};

export default Shop;
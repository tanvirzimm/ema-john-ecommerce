import React from 'react';
import { useContextValue } from '../Login/useAuth';


const Cart = (props) => {
    
    const cart = props.cart;
    let total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);


    let shipping = 0;

    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4
    }
    else if (total > 0) {
        shipping = 12;
    }

    let tax = total / 10;

    const formatNumbers = (number) =>{
        const fixedNumber = number.toFixed(2);
        return Number(fixedNumber);
    }

    let grandTtotal = total + shipping + tax;

    return (
        <div>
            <h1>Order Summery</h1>
            <h4>Items ordered {cart.length}</h4>
            <h4>Total Product Cost : {formatNumbers(total)}</h4>
            <h4>Shipping cost {shipping}</h4>
            <h4>Tax : {formatNumbers(tax)}</h4>
            <h4>Total: {formatNumbers(grandTtotal)}</h4>
           {
               props.children
           }
        </div>
    );
};

export default Cart;
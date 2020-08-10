import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';
const Header = () => {
    
    const auth = useAuth();
    
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Review</Link>
                <Link to="/orders">Order History</Link>
                {
                    auth.user && <Link to='#' style={{color:'yellow'}}>{ auth.user.name }</Link>
                }
                {
                    auth.user? <Link to='/login' style={{color:'yellow'}}>Sign Out</Link>:<Link to='/login' style={{color:'yellow'}}>Sign In</Link>
                }
            </nav>
        </div>
    );
};

export default Header;
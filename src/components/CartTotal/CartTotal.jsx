import React from 'react';
import { withRouter } from 'react-router-dom';
import './CartTotal.scss'

const CartTotal = ({ history, itemCount, total }) => {

    return (
        <div className="total-container">
            <div className="total">
                <p>Total Items: {itemCount}</p>
                <p>{`Total: ${total}`}</p>
            </div>
            <div className="checkout">
                <button 
                    className="button is-black" 
                    onClick={() => history.pushState('/checkout')}>
                    CHECKOUT
                </button>
                <button
                    className="button is-white" 
                    onClick={() => {}}>
                    CLEAR
                </button>
            </div>
        </div>
    );
}

export default withRouter(CartTotal);
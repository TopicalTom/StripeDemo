import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../assets/Icons/index';
import './CartItem.scss'

const CartItem = (props) => {
    const { increase, decrease, remove, title, imageUrl, price, quantity, id, description } = props;
    const product = { title, imageUrl, price, quantity, id, description };

    return (
        <div className="cart-item">
            <div className="item-image">
                <img 
                    src={imageUrl}
                    alt="product"
                />
            </div>
            <div className="name-price">
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
            <div className="quantity">
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className="btns-container">
                <button 
                    className="btn-increase"
                    onClick={() => increase(product)}>
                    <PlusCircleIcon width='20px' />
                </button>
                {
                    quantity === 1 &&
                    <button 
                        className="btn-trash"
                        onClick={() => remove(product)}>
                        <TrashIcon width='20px' />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button 
                        className="btn-decrease"
                        onClick={() => decrease(product)}>
                        <MinusCircleIcon width='20px' />
                    </button>
                }
            </div>
        </div>
    );
}

export default CartItem;
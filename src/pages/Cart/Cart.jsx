import React, { useContext } from 'react';
import Layout from '../../layout/Layout';
import { CartContext } from '../../context/CartContext';
import Item from '../../components/CartItem/CartItem';
import Total from '../../components/CartTotal/CartTotal';
import './Cart.scss';

const Cart = () => {
    const { cartItems, itemCount, total, increase, decrease, remove } = useContext(CartContext);
    const funcs = {increase, decrease, remove };
    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {cartItems.length === 0
                    ?   <div className="empty-cart">Your Cart is empty</div>
                    :   <div className="cart-page">
                            <div className="cart-item-container">
                                {cartItems.map(item => 
                                    <Item { ...item} { ...funcs} key={item.id} />
                                )}
                            </div>
                            <Total itemCount={itemCount} total={total}/>
                        </div>
                }
            </>
        </Layout>
    );
}

export default Cart;
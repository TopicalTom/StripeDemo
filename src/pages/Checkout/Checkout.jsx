import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../layout/Layout';
import StripeCheckout from '../../components/StripeCheckout/StripeCheckout';
import './Checkout.scss';

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);

    return (
        <Layout>
            <div className="checkout">
                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${itemCount}`}</h3>
                <h4>{`Amount to Pay: $${total}`}</h4>
                <StripeCheckout />
            </div>
        </Layout>
    );
}

export default Checkout;
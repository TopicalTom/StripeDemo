import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../layout/Layout';
//import StripeCheckout from '../../components/StripeCheckout/StripeCheckout';]
import ShippingAddress from '../../components/ShippingAddress/ShippingAddress';
import './Checkout.scss';

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);
    const [ shipping, setShipping] = useState(null);
    const addressShown = {
        display: (shipping ? 'none' : 'block')
    }

    return (
        <Layout>
            <div className="checkout">
                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${itemCount}`}</h3>
                <h4>{`Amount to Pay: $${total}`}</h4>
                <div style={addressShown}>
                    <ShippingAddress setShipping={setShipping} />
                </div>
            </div>
        </Layout>
    );
}

export default Checkout;
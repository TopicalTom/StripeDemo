import React, { useContext } from 'react';
import Layout from '../../layout/Layout';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import { ProductsContext } from '../../context/ProductsContext';
import './Shop.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
        <FeaturedProduct {...product} key={product.id} />
    )); 

    return (
        <Layout>
            <div className="product-list-container">
                <h2 
                    className="product-list-title">
                    Shop
                </h2>
                <div className="product-list">
                    {allProducts}
                </div>
            </div>
        </Layout>
    );
}

export default Shop;
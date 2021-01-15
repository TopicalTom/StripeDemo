import React from 'react';
import Layout from '../../layout/Layout';
import Hero from '../../components/Hero/Hero';
import MainSection from '../../components/MainSection/MainSection';
import FeaturedCollection from  '../../components/FeaturedCollection/FeaturedCollection';

const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <MainSection />
                <FeaturedCollection />
            </Layout>
        </>
    );
}

export default Home;
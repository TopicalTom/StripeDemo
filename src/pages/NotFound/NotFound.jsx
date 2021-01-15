import React from 'react';
import Layout from '../../layout/Layout';
import './NotFound.scss';

const NotFound = () => {
    return (
        <>
            <Layout>
                <p className="not-found"> Unfortunately we can't find that page</p>
            </Layout>
        </>
    );
}

export default NotFound;
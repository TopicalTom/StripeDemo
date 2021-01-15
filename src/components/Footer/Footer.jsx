import React from 'react';
import './Footer.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            {year} © NOMAD Store
        </div>
    );
}

export default Footer;
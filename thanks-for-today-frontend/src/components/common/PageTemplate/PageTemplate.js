import React from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import './PageTemplate.scss';

const PageTemplate = ({ header, children, footer }) => {
    return (
        <div className="page-template">
            <header>{header}</header>
            <main>{children}</main>
            <footer><Footer /></footer>
        </div>
    );
};

export default PageTemplate;

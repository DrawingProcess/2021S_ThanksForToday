import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import HomeContainer from 'containers/HomeContainer';
import Header from "components/common/Header";

const HomePage = ({ history, location }) => {
    return (
        <div>
            <PageTemplate header={<Header location={location} />}>
                <HomeContainer />
            </PageTemplate>
        </div>
    );
};

export default HomePage;

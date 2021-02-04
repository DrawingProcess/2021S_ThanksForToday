import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import HomeContainer from 'containers/HomeContainer';

const HomePage = ({ history, location }) => {
    return (
        <div>
            <PageTemplate>
                <HomeContainer />
            </PageTemplate>
        </div>
    );
};

export default HomePage;

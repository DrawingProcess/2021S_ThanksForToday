import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import HomeContainer from 'containers/HomeContainer';
import Header from "components/common/Header";

const HomePage = ({ history, match, location }) => {
    return (
        <div>
            <PageTemplate header={<Header location={location} ismain={true} />}>
                <HomeContainer match={match} history={history} />
            </PageTemplate>
        </div >
    );
};

export default HomePage;

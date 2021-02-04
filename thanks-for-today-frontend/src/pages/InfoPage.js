import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Info from 'components/Info';
import Header from "components/common/Header";

const InfoPage = ({ history, match, location }) => {
    return (
        <div>
            <PageTemplate header={<Header location={location} />}>
                <Info match={match} history={history} />
            </PageTemplate>
        </div >
    );
};

export default InfoPage;

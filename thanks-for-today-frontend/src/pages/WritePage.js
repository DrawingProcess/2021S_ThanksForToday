import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import WriteContainer from 'containers/WriteContainer';
import Header from "components/common/Header";

const WritePage = ({ history, match, location }) => {
    return (
        <div>
            <PageTemplate header={<Header location={location} />}>
                <WriteContainer match={match} history={history} />
            </PageTemplate>
        </div >
    );
};

export default WritePage;

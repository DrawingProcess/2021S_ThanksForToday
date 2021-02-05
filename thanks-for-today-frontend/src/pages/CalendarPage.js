import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CalendarContainer from 'containers/CalendarContainer';
import Header from "components/common/Header";

const CalendarPage = ({ history, match, location }) => {
    return (
        <div>
            <PageTemplate header={<Header location={location} />}>
                <CalendarContainer match={match} history={history} />
            </PageTemplate>
        </div >
    );
};

export default CalendarPage;

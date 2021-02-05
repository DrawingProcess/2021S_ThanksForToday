import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import TodoContainer from 'containers/TodoContainer';
import Header from "components/common/Header";

const TodoPage = ({ history, match, location }) => {
    return (
        <div>
            <PageTemplate header={<Header location={location} />}>
                <TodoContainer match={match} history={history} />
            </PageTemplate>
        </div >
    );
};

export default TodoPage;

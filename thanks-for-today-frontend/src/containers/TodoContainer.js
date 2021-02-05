import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';
import Todo from 'components/Todo';

class TodoContainer extends Component {
    render() {
        const { match, history } = this.props;
        return (
            <Todo match={match} history={history} />
        );
    }
}

export default TodoContainer;

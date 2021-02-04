import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';
import Home from 'components/Home';

class HomeContainer extends Component {
    render() {
        const { match, history } = this.props;
        return (
            <Home match={match} history={history} />
        );
    }
}

export default HomeContainer;

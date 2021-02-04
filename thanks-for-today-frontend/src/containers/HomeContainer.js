import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';
import Home from 'components/Home';

class HomeContainer extends Component {
    render() {
        console.log('home container');
        return (
            <Fragment>
                <Home />
            </Fragment>
        );
    }
}

export default HomeContainer;

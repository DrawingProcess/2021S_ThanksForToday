import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Write from 'components/Write';

class WriteContainer extends Component {
    render() {
        const { match, history } = this.props;
        return (
            <Write match={match} history={history} />
        );
    }
}

export default WriteContainer;

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';
import * as diaryActions from "store/modules/diary";
import Home from 'components/Home';

class HomeContainer extends Component {

    getWordCloud = async () => {
        const { DiaryActions } = this.props;
        try {
            await DiaryActions.getwordCloud();
        } catch (e) {
            console.log("error log:", e);
        }
    };

    render() {
        const { match, history } = this.props;
        return (
            <Home match={match} history={history} getWordCloud={this.getWordCloud} wordCloud={this.props.wordCloud} />
        );
    }
}

export default connect(
    (state) => ({
        diaryList: state.diary.get("diaryList"),
        diary: state.diary.get("diary"),
        wordCloud: state.diary.get("wordCloud"),
    }),
    (dispatch) => ({
        DiaryActions: bindActionCreators(diaryActions, dispatch),
    })
)(HomeContainer);


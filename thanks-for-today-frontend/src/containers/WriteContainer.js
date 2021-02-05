import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as diaryActions from "store/modules/diary";
import Write from 'components/Write';

class WriteContainer extends Component {

    addDiary = async (formdata) => {
        const { DiaryActions } = this.props;
        try {
            await DiaryActions.addDiary(formdata);
        } catch (e) {
            console.log("error log:", e);
        }
    };

    updateDiary = async (diary_num, formdata) => {
        console.log("updateBoard");
        const { DiaryActions } = this.props;
        try {
            await DiaryActions.updateDiary(diary_num, formdata);
        } catch (e) {
            console.log("error log:", e);
        }
    };

    render() {
        const { match, history, diaryList, diary } = this.props;
        return (
            <Write match={match} history={history}
                diaryList={diaryList}
                diary={diary}
                addDiary={this.addDiary}
                updateDiary={this.updateDiary} />
        );
    }
}

export default connect(
    (state) => ({
        diaryList: state.diary.get("diaryList"),
        diary: state.diary.get("diary"),
    }),
    (dispatch) => ({
        DiaryActions: bindActionCreators(diaryActions, dispatch),
    })
)(WriteContainer);


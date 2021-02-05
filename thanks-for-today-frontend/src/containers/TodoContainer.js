import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as diaryActions from "store/modules/diary";
import Todo from 'components/Todo';

class TodoContainer extends Component {

    getDiaryList = async () => {
        const { DiaryActions } = this.props;
        try {
            await DiaryActions.getDiaryList();
        } catch (e) {
            console.log("error log:", e);
        }
    };

    componentDidMount() {
        this.getDiaryList();
    }

    render() {
        const { match, history, diaryList, diary } = this.props;
        return (
            <Todo match={match} history={history}
                diaryList={diaryList}
                diary={diary}
                getDiaryList={this.getDiaryList}
            />
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
)(TodoContainer);

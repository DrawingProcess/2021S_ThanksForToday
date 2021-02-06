import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as diaryActions from "store/modules/diary";
import CustomCalendar from 'components/CustomCalendar';

class CalendarContainer extends Component {
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
        console.log(diaryList);
        return (
            <CustomCalendar match={match} history={history} diaryList={diaryList} getDiaryList={this.getDiaryList} />
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
)(CalendarContainer);

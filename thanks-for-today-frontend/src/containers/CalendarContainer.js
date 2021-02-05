import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomCalendar from 'components/CustomCalendar';

class CalendarContainer extends Component {
    render() {
        const { match, history } = this.props;
        return (
            <CustomCalendar match={match} history={history} />
        );
    }
}

export default CalendarContainer;

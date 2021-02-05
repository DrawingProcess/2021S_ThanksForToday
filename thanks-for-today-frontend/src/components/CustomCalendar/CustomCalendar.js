import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { Link } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomPopup from "components/common/CustomPopup";
import './CustomCalendar.scss';

const localizer = momentLocalizer(moment)

class CustomCalendar extends Component {
    constructor(props) {
        super(props);
        const now = new Date();
        const events = [
            {
                id: 0,
                title: 'All Day Event very long title',
                allDay: true,
                start: new Date(2019, 6, 0),
                end: new Date(2019, 6, 1),
            },
            {
                id: 1,
                title: 'Long Event',
                start: new Date(2019, 3, 7),
                end: new Date(2019, 3, 10),
            },
            {
                id: 2,
                title: 'Right now Time Event',
                start: now,
                end: now,
            },
        ]
        this.state = {
            events,
            value: new Date(),
            onChange: new Date(),
            popup: false,
        };
    }
    onDateChange = date => {
        const { popup } = this.state;
        this.setState({
            date: moment(date).format("YYYY-MM-DD"),
            popup: !popup,
        })
        console.log(this.state.popup);
    };
    render() {
        const { popup } = this.state;
        return (
            <div className="customcalendar">
                <div className="write-diary">
                    <Link to="/write">
                        일기 작성하러 가기 ->
                </Link>
                </div>
                <div className="calendar-style">
                    <Calendar
                        events={this.state.events}
                        startAccessor="start"
                        endAccessor="end"
                        defaultDate={moment().toDate()}
                        localizer={localizer}
                        onDoubleClickEvent={this.onDateChange}
                    />
                    {popup && <CustomPopup />}
                </div>
            </div>
        )
    }
}

export default CustomCalendar;

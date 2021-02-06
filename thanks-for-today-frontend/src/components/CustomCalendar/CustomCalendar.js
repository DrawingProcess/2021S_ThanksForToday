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
                title: '수강신청',
                allDay: true,
                start: new Date(2021, 2, 1),
                end: new Date(2021, 2, 1),
            },
            {
                id: 1,
                title: '해커톤',
                start: new Date(2021, 1, 4),
                end: new Date(2021, 1, 4),
            },
            {
                id: 2,
                title: '해커톤',
                start: now,
                end: now,
            },
            {
                id: 1,
                title: '맛있는거',
                start: new Date(2021, 1, 10),
                end: new Date(2021, 1, 10),
            },
            {
                id: 1,
                title: '학교',
                start: new Date(2021, 1, 16),
                end: new Date(2021, 1, 16),
            },
            {
                id: 1,
                title: '스키',
                start: new Date(2021, 1, 7),
                end: new Date(2021, 1, 7),
            },
            {
                id: 1,
                title: '고민',
                start: new Date(2021, 1, 2),
                end: new Date(2021, 1, 2),
            },
        ]
        this.state = {
            events,
            value: new Date(),
            onChange: new Date(),
            popup: false,
            selectedDay: new Date(),
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

    componentDidMount() {
        this.props.getDiaryList();
        const { diaryList } = this.props;
        const { events } = this.state;
        console.log(diaryList);
        var modifiedArr = diaryList.map(element => ({ ...element, start: new Date(element.start.replace("\"", "")), end: new Date(element.end.replace("\"", "")) }));
        console.log(modifiedArr);
        this.setState({
            events: [...events, ...modifiedArr]
        })
    }

    render() {
        const { popup } = this.state;
        const { diaryList } = this.props;
        var modifiedArr = diaryList.map(element => ({ ...element, start: new Date(element.start), end: new Date(element.end) }));
        console.log([...this.state.events, ...modifiedArr]);
        return (
            <div className="customcalendar">
                <div className="write-diary">
                    <Link to="/write">
                        일기 작성하러 가기 ->
                </Link>
                </div>
                <div className="calendar-style">
                    <Calendar
                        events={[...this.state.events, ...modifiedArr]}
                        startAccessor="start"
                        endAccessor="end"
                        localizer={localizer}
                        onDoubleClickEvent={this.onDateChange}
                        defaultDate={new Date()}
                        onNavigate={date => {
                            this.setState({ selectedDate: date });
                        }}
                    />
                    {popup && <CustomPopup />}
                </div>
            </div>
        )
    }
}

export default CustomCalendar;

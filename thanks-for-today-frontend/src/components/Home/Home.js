import React, { Component } from 'react';

import './Home.scss';
import SearchBar from "components/common/SearchBar";
import searchIcon from "images/search.png";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)


class Home extends Component {
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
            events
        };
    }

    render() {
        return <div className="home">
            <div className="home-main">
                <div className="home-content">
                    <div className="home-text">
                        <div className="title">
                            당신의 추억을 지켜주는<br></br>
                            AI 스마트 다이어리
            </div>
                        <div className="description">
                            매일 복잡한 하루를 살아가는 당신을 위해
            </div>
                    </div>
                    <div className="home-search">
                        <SearchBar />
                        <button className="search-button">
                            <img src={searchIcon} alt="search" />
                        </button>
                    </div>
                    <div className="home-calendar">
                        <div style={{ width: '750px', height: '300px', background: 'white' }}>
                            <Calendar
                                events={this.state.events}
                                startAccessor="start"
                                endAccessor="end"
                                defaultDate={moment().toDate()}
                                localizer={localizer}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Home;

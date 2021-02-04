import React, { Component } from 'react';

import './Home.scss';
import SearchBar from "components/common/SearchBar";
import searchIcon from "images/search.png";
import CustomSlider from "components/common/CustomSlider";
import Calendar from 'react-calendar';
import moment from 'moment';
import CustomPopup from "components/common/CustomPopup";
import 'react-calendar/dist/Calendar.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.searchSelect = [
            { text: "일기쓰기", searchType: "write" },
            { text: "일기검색", searchType: "search" },
        ];
        this.state = {
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
            <div className="home">
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
                            <SearchBar
                                searchSelect={this.searchSelect} />
                            <button className="search-button">
                                <img src={searchIcon} alt="search" />
                            </button>
                        </div>
                        <div className="home-calendar">
                            <Calendar
                                onClickDay={this.onChange}
                                onChange={this.onDateChange}
                                value={this.value}
                            />
                            {popup && <CustomPopup />}
                        </div>
                    </div>
                </div>
                <div className="sidehome">
                    <CustomSlider />
                </div>
            </div>
        )
    }
}

export default Home;

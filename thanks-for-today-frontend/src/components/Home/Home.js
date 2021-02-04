import React, { Component } from 'react';

import './Home.scss';
import SearchBar from "components/common/SearchBar";
import searchIcon from "images/search.png";
import Calendar from 'react-calendar';
import Slider from "react-slick";
import 'react-calendar/dist/Calendar.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date(),
            onChange: new Date()
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
                        <Calendar
                            onChange={this.onChange}
                            value={this.value}
                        />
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Home;

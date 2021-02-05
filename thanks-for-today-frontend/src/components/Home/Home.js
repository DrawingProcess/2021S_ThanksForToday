import React, { Component } from 'react';
import './Home.scss';
import SearchBar from "components/common/SearchBar";
import { Link } from 'react-router-dom';
import searchIcon from "images/search.png";
import CustomSlider from "components/common/CustomSlider";
import DiaryTree from "components/common/DiaryTree";

class Home extends Component {
    constructor(props) {
        super(props);
        this.searchSelect = [
            { text: "일기쓰기", searchType: "write" },
            { text: "일기검색", searchType: "search" },
        ];

    }

    render() {
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
                        <div className="ai-diary">
                            <Link to="/information">
                                AI 스마트 다이어리란?
					</Link>
                        </div>
                        <div className="home-search">
                            <SearchBar
                                searchSelect={this.searchSelect} />
                            <button className="search-button">
                                <img src={searchIcon} alt="search" />
                            </button>
                        </div>
                        <div className="diary-button">
                            <Link to="/write">
                                일기 작성하기
					</Link>
                        </div>
                    </div>
                </div>
                <div className="sidehome">
                    <CustomSlider />
                </div>
                <div className="analysis">
                    <DiaryTree />
                </div>
            </div>
        )
    }
}

export default Home;

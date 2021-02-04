import React from 'react';
import { Link } from 'react-router-dom';
import logo from "images/logo.png";
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="list">
                    <Link to="/home">
                        MAIN
					</Link>
                    <Link to="/write">
                        일기쓰러가기
					</Link>
                    <Link to="/secret">
                        소곤소곤 나만의 비밀이야기
					</Link>
                    <Link to="/todo">
                        TODO
					</Link>
                    <Link to="/calendar" >
                        캘린더
					</Link>
                    <Link to="/post">
                        운세
					</Link>
                </div>
            </div>
        </div>
    )
};

export default Header;

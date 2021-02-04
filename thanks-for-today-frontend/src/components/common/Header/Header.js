import React from 'react';
import { Link } from 'react-router-dom';
import logo from "images/logo.png";
import logoDark from "images/logo_dark.png";
import './Header.scss';

const Header = ({ ismain }) => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={ismain ? logo : logoDark}></img>
                </div>
                <div className={ismain ? "list" : "list dark"}>
                    <Link to="/">
                        MAIN
					</Link>
                    <Link to="/todo">
                        TODO
					</Link>
                    <Link to="/calendar">
                        거대 캘린더
					</Link>
                    <Link to="/information">
                        AI 스마트 다이어리란?
					</Link>
                </div>
            </div>
        </div>
    )
};

export default Header;

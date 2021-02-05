import React, { Component } from 'react';
import './Write.scss';
import { Link } from 'react-router-dom';
import Editor from "components/Editor";
import moment from "moment";
import img1 from "images/1.png";
import img2 from "images/2.png";
import img3 from "images/3.png";

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: moment().format("YYYY-MM-DD"),
            inputStr: '',
        };
    }

    onEditorChange = (e) => {
        console.log(e);
        this.setState({
            inputStr: e
        })
    }

    handleForm = (name) => (e) => {
        this.setState({ [name]: e.target.value });
        console.log(this.state.title);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
        }
    };
    onClickSave = (e) => {
        const { title, date, inputStr } = this.state;
        //let json = { 'title': title, 'date': date, 'body': inputStr }
        let formdata = new FormData();
        formdata.append("title", title);
        formdata.append("date", date);
        formdata.append("body", inputStr);
        this.props.addDiary(formdata);
        //console.log(json);
        alert("저장");
    }

    render() {
        const { diary } = this.state;
        return (
            <div className="write">
                <div className="button-area">
                    <button>
                        임시저장
                    </button>
                    <button onClick={this.onClickSave}>
                        저장
                    </button>
                </div>
                <div className="icon">
                    <img src={img1}></img>
                    <img src={img2}></img>
                    <img src={img3}></img>
                </div>
                <div className="title">
                    <input
                        className="id"
                        type="text"
                        placeholder="제목을 입력해주세요"
                        onChange={this.handleForm("title")}
                        onKeyPress={this.handleKeyPress}></input>
                    <span>
                        {moment().format("YYYY년MM월DD일 | hh:mm")}
                    </span>
                </div>
                <div className="editor-area">
                    <Editor value={this.state.inputStr} onChange={this.onEditorChange} />
                </div>
            </div>
        )
    }
}

export default Write;

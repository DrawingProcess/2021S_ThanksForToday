import React, { Component } from 'react';
import './Write.scss';
import { Link } from 'react-router-dom';
import Editor from "components/Editor";
import moment from "moment";

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
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

    render() {
        const { diary } = this.state;
        return (
            <div className="write">
                <div className="button-area">
                    <button>
                        임시저장
                    </button>
                    <button>
                        저장
                    </button>
                </div>
                <div className="icon">
                    gg
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

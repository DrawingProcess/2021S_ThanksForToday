import React, { Component } from 'react';
import './Todo.scss';
import { Link } from 'react-router-dom';
import Editor from "components/Editor";
import moment from "moment";

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { diaryList } = this.props;
        return (
            <div className="todo">
                <div className="todo-title">
                    지금까지 쌓인 추억들
                         </div>
                <div className="list">
                    <div className="todo">
                        <div className="content">
                            제목 제목 제목 제목<br></br>
                            <span>내용 내용 내용 내용</span><br></br>
                            <span>해시태그 해시태그 해시태그</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;

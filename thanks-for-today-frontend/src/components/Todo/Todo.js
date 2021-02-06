import React, { Component } from 'react';
import './Todo.scss';
import { Link } from 'react-router-dom';
import CustomPopup from "components/common/CustomPopup";
import Editor from "components/Editor";
import moment from "moment";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
        };
    }

    handlePopup = (e) => {
        const { popup } = this.state;
        console.log(e);
        this.setState({
            popup: !popup
        })
    }

    render() {
        const { diaryList } = this.props;
        const { popup } = this.state;
        return (
            <div className="todo">
                <div className="todo-title">
                    지금까지 쌓인 추억들
                         </div>
                <div className="list">
                    {popup && <CustomPopup />}
                    <div className="todo">
                        <div className="content" onClick={this.handlePopup}>
                            오늘은 해커톤 마지막 날이다<br></br>
                            <span>힘들었지만 나름 재밌었던 3일간의 개발일기!! 졸리다..</span><br></br>
                            <span>#해커톤 #개발</span>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="content" onClick={this.handlePopup}>
                            일기 안쓸래<br></br>
                            <span>일기를 쓰는데 테스트용 일기를 쓰는중이다 길게 쓰기 싫다</span><br></br>
                            <span>#일기 #테스트</span>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="content" onClick={this.handlePopup}>
                            오늘 하루도 돌아 봐야 할 필요가 있다.<br></br>
                            <span>일기를 쓰고 블로그에 정리하면서 해시태그도 뽑히면 <br></br>그걸로 편하게 인스타그램 올려야지</span><br></br>
                            <span>#일기 #블로그 #해시태그</span>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="content" onClick={this.handlePopup}>
                            해커톤 드디어 끝나간다<br></br>
                            <span>긴장했었는데 끝나버리네...ㅠㅠㅠ 아쉽다.....kkkkkkkkkkkkk</span><br></br>
                            <span>#긴장</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;

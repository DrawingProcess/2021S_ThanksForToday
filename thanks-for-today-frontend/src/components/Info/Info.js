import React, { Component } from 'react';
import './Info.scss';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <div className="info-content">
                    <div className="section-one">
                        새로운 일기를 즐기는 방법,<br></br>
                        THANKS FOR TODAY<br></br>
                        <div className="title">
                            AI 다이어리
                                 </div>
                    </div>
                    <div className="section-two">
                        <div className="hashtag">
                            #포스트 코로나<br></br>
                            #코로나 블루<br></br>
                            #우울&nbsp;#무력감&nbsp;#집콕
                        </div>
                        <div className="description">
                            코로나의 확산세가 꺾일줄 모르고 있습니다.<br></br>
                            비대면 수업, 집콕, 재택 근무가 늘기시작하고,<br></br>
                            주변사람들과의 커뮤니케이션이 줄어들기 시작했습니다<br></br><br></br>
                            코로나19의 확산세를 방지하기 위해 역학조사하지만 한계에 부딪히는 등<br></br>
                            많은 어려움이 존재하고 있습니다.<br></br>
                            언제 어디를 갔고 누구를 만났는지 등 하루 일정을 기록해 혹시 확진자로<br></br>
                            분류될 때 역학 조사에 도움이 될 수 있지 않을까요?<br></br><br></br>
                            또한, 일기를 통해 불안한 마음을 문자로 옮기면서 기분을<br></br>
                            진정시켜보지 않으시겠어요??
                        </div>
                    </div>
                    <div className="section-three">
                        <div className="circle-area">
                            <div className="circle">
                                일상
                                </div>
                            <div className="circle">
                                기록
                                </div>
                            <div className="circle">
                                분석
                                </div>
                            <div className="circle">
                                정리
                                </div>
                            <div className="circle">
                                편리함
                                </div>
                        </div>
                        <div className="description">
                            왜 AI 일기장이여야 할까요.<br></br>
                            연필로 써내려간 일기장.. 글로 이루어진 일기장은 나중에 잃어버리거나 다쓰면 바꿔야하는 불편함이 존재합니다.<br></br>
                            단순히 일기를 쓸 수 있는 것이 아닌 내가 뭘 좋아하는지, 내가 어디를 많이 갔는지 분석해주는 AI 일기장이 존재한다면?<br></br>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;

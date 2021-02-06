import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './CustomPopup.scss';

const CustomPopup = (open) => (
	<Popup contentStyle={{ width: "500px", height: "300px", fontSize: "15px" }} open={open} position="right center" >
		<div className="custompopup">
			<div className="title">
				오늘은 해커톤 마지막 날이다
			</div>
			<div className="content">
				힘들었지만 나름 재밌었던 3일간의 개발일기!! 졸리다...
			</div>
			<div className="hashtag">
				#해커톤 #개발
			</div>
		</div>
	</Popup >
);

export default CustomPopup;
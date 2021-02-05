import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CustomPopup = (open) => (
	<Popup open={open} position="right center">
		<div>일기를 작성하시겠어요?
			일기가 있을 경우 일기 or 분석 보기
		</div>
	</Popup>
);

export default CustomPopup;
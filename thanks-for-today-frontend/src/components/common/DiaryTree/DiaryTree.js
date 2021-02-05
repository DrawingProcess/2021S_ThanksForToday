import React, { Component } from 'react';
import './DiaryTree.scss';

class DiaryTree extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="diarytree">
				<div className="text">
					일기분석<br></br>
					<span>
						내가 자주 사용하는 단어들은?
						</span>
				</div>
			</div>
		);
	}
}

export default DiaryTree;
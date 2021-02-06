import React, { Component } from 'react';
import './DiaryTree.scss';
import tree from 'images/tree.png';

class DiaryTree extends Component {

	constructor() {
		super();
	}

	render() {
		console.log(this.props.wordCloud);
		return (
			<div className="diarytree">
				<div className="text">
					일기분석<br></br>
					<span>
						내가 자주 사용하는 단어들은?
						</span>
				</div>
				<img src={tree}></img>
			</div>
		);
	}
}

export default DiaryTree;
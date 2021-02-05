import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomSlider.scss';
import img1 from "images/logo.png";
import img2 from "images/logo_dark.png";

class CustomSlider extends React.Component {

	constructor() {
		super();
		this.state = {
			sliders: [
				"ggggg",
				"ggggg",
				"ggggg",
				img1, img2
			]
		}
	}

	sliders() {
		return this.state.sliders.map(data => {
			return (
				<div className="slider-card" key={data}>
					<div className="slider-title">
						내용들을 넣어봅시다.
					</div>
					<div className="slider-content">
						오늘은 무엇을 했다.
					</div>
				</div>
			)
		});
	}

	render() {
		const settings = {
			dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
			infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
			speed: 200, // 애미메이션의 속도, 단위는 milliseconds
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 3, // 한번에 몇개의 슬라이드를 보여줄 지
			slidesToScroll: 1 // 한번 스크롤시 몇장의 슬라이드를 넘길지
		};
		return (
			<div className="customslider">
				<div className="text">
					최근 일기<br></br>
					<span>믿거나 말거나 재밌는 심리테스트</span>
				</div>
				<div className="slider">
					<Slider {...settings}>
						{this.sliders()}
					</Slider>
				</div>
			</div>
		);
	}
}

export default CustomSlider;
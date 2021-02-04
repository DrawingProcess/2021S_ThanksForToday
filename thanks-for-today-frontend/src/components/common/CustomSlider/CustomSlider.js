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
				'http://img.nowrunning.com/content/movie/2014/Jagga-Jaso/wall_1024x768_01.jpg',
				'https://alchetron.com/cdn/Cocktail-2012-film-images-6dbd0ec2-2ea4-47aa-88fd-388cabed7f8.jpg',
				'http://media.glamsham.com/download/wallpaper/movies/images/z/zindagi-na-milegi-dobara-wallpaper-03-12x9.jpg',
				img1, img2
			]
		}
	}

	sliders() {
		return this.state.sliders.map(data => {
			return (
				<div className="slider-card" key={data}>
					<img alt="image" src={data} />
				</div>
			)
		});
	}

	render() {
		const settings = {
			dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
			infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
			speed: 500, // 애미메이션의 속도, 단위는 milliseconds
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 3, // 한번에 몇개의 슬라이드를 보여줄 지
			slidesToScroll: 1 // 한번 스크롤시 몇장의 슬라이드를 넘길지
		};
		return (
			<div className="customslider">
				<div className="text">
					추천 심리 테스트<br></br>
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
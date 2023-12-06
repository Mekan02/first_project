import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './SliderCard.css'
import server from "../../../../server.json"


const SliderCard = ({data}) => {
	const settings = {
		dots: true,
		arrows: false,
		infinity: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		appendDots: (dots) => {
			return <ul style={{ margin: '0px' }}> {dots} </ul>
		},
	}

	return (
		<>
			<div className="main-slider">
				<Slider {...settings} className='main-slider' slide='main-slider'>
					{data.map((item,i) => {
							return (
								<div className="main-slider__item" key={i}>
									{/* <div className="main-slider__content">
										<h1 className='main-slider__title'></h1>
										<p className='main-slider__txt'></p>
										<button className='main-slider__btn'>Visit..</button>
									</div> */}
									<img className="main-slider__img" src={`${server.server}/${item.image}`} alt="img" />
								</div>
							)
						})}
				</Slider>
			</div>
		</>
	)
}



export default SliderCard;

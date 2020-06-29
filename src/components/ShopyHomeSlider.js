import React from 'react';
import Slider from 'react-slick';

class ShopyHomeSlider extends React.Component {
	render(){
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 2000,
			// appendDots: dots => (
   //      <div
   //        style={{
   //          color: "orange",
   //          borderRadius: "10px",
   //          padding: "10px"
   //        }}
   //      >
   //        <ul style={{ margin: "0px" }}> {dots} </ul>
   //      </div>
   //    ),
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings}>
				<div>
					<img src={require('../assets/images/slide-first.jpg')} alt="slide-first" /> 	
				</div>
				<div>
					<img src={require('../assets/images/slide-first.jpg')} alt="slide-first" /> 	
				</div>
				<div>
					<img src={require('../assets/images/slide-first.jpg')} alt="slide-first" /> 	
				</div>
			</Slider>
		);
	}
}

export default ShopyHomeSlider;
import React from 'react';
import './BestSales.css';
// import brownSuitMini from '../assets/images/woman-brown-suit-mini.jpg';

class ProductBestSales extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			brand: 'reebok',
			name: 'track jacket',
			price: 100
		}
	}
	render(){
		let name = `${this.state.brand} ${this.state.name}`;
		return (
			<div className="bestsales-item">
				<div className="bestsales-item-picture">
					<img src={require('../assets/images/woman-brown-suit-mini.jpg')} alt="brown-suit-mini"/>
				</div>
				<div className="bestsales-item-info">
					<h3>{name}</h3>
					<div className="bestsales-item-info-rateprice">
						<img src={require('../assets/images/star-rating.png')} alt="star-rating"/>
						<span>{this.state.price}$</span>
					</div>	
				</div>
			</div>
		)
	}
}

export default ProductBestSales;
import React from 'react';
import './Advertising.css';

class AdvertisingOffer extends React.Component {
	constructor(){
		super();
		this.state = {
			offer: {
				name: 'full winter kit',
				text: 'Half Jacket + Skiny Trousers + Boot leather',
				price: 120
			}
		}
	}
	render(){
		return (
			<div className="avdertising-offer">
				<img src={require('../assets/images/advertising-50percent-sale.jpg')} alt="percent-icon"/>
				<div className="avdertising-offer-content">
					<h3 className="avdertising-offer-header">{this.state.offer.name}</h3>	
					<p className="avdertising-offer-text">{this.state.offer.text}</p>
				</div>
				<div className="avdertising-offer-shopprice">
					<img src={require('../assets/images/icon-add-to-cart.png')} alt="add-icon"/>
					<span className="avdertising-offer-price">{this.state.offer.price}</span>
					<span className="advertising-offer-dollar">$</span>
				</div>
			</div>
		)
	}
}

export default AdvertisingOffer;
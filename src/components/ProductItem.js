import React from 'react';
import './ProductItem.css';

class ProductItem extends React.Component {
	render(){
		return (
			<div className="products-row-home">
				<img src={this.props.avatar} alt={this.props.name}/>
				<h3 className="products-header">{this.props.name}</h3>
				<p className="products-price">{this.props.price}$</p>
			</div>
		)
	}
}

export default ProductItem;
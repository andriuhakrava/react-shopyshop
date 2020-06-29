import React from 'react';
import ProductItem from './ProductItem';
import womanJacketPink from '../assets/images/woman-jacket-pink.jpg';
import womanJacketGray from '../assets/images/woman-jacket-gray.jpg';
import womanJacketTrain from '../assets/images/woman-trainjacket-red.jpg';

class ProductsList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			prodlist: [
				{id:1, brand: 'Reebok', name: 'Track Jacket', avatar: womanJacketPink, price: 100}, 
				{id:2, brand: 'Reebok', name: 'Track Jacket', avatar: womanJacketGray, price: 200}, 
				{id:3, brand: 'Reebok', name: 'Track Jacket', avatar: womanJacketTrain, price: 300},
				{id:4, brand: 'Reebok', name: 'Track Jacket', avatar: womanJacketTrain, price: 300}
			]
		}
	}
	render(){
		const {prodlist} = this.state;
		return (
			<div>
				<div className="row">
					{ prodlist.map((item, index) => {
						return (
							<div className="col-md-3" key={item.brand + item.name + index} >
		 						<ProductItem
		 								name={item.brand + item.name} 
		 								price={item.price} 
		 								avatar={item.avatar} 
		 						/>
		 					</div>
						)
					}) }	
				</div>
			</div>
		)
	}
}

export default ProductsList;
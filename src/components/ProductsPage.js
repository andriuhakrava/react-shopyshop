import React from 'react';
import WidgetBar from './widgets/WidgetBar';
import ProductItem from './ProductItem';
import NewsLetter from './NewsLetter';
import './ProductsPage.css';
import womanJacketPink from '../assets/images/woman-jacket-pink.jpg';
import womanJacketGray from '../assets/images/woman-jacket-gray.jpg';
import womanJacketTrain from '../assets/images/woman-trainjacket-red.jpg';

class Products extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			prodlist: [
				{name: 'Reebok Track Jacket', avatar: womanJacketGray, price: 100}, 
				{name: 'Reebok Track Jacket', avatar: womanJacketPink, price: 100}, 
				{name: 'Reebok Track Jacket', avatar: womanJacketTrain, price: 100}
			]
		}
	}
	render(){
		const {prodlist} = this.state;
		return (
			<div className="content-wrapper products-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<WidgetBar />
						</div>
						<div className="col-md-9">
							<div className="row">
								{ prodlist.map((item, index) => {
									return (
											<div className="col-md-4">
					 							<ProductItem name={item.name} price={item.price} avatar={item.avatar}/>
					 						</div>
										)
									}) 
								}
							</div>
							<div className="row">
								{ prodlist.map((item, index) => {
									return (
											<div className="col-md-4">
					 							<ProductItem name={item.name} price={item.price} avatar={item.avatar}/>
					 						</div>
										)
									}) 
								}
							</div>
							<div className="row">
								{ prodlist.map((item, index) => {
									return (
											<div className="col-md-4">
					 							<ProductItem name={item.name} price={item.price} avatar={item.avatar}/>
					 						</div>
										)
									}) 
								}
							</div>

						</div>
					</div>
					<div className="row">
						<NewsLetter />
					</div>
				</div>
			</div>
		);
	}
}

export default Products;
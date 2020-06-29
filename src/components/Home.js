import React from 'react';
import ShopyHomeSlider from './ShopyHomeSlider';
import Title from './Title';
import ProductsList from './ProductsList';
import LoadMore from './LoadMore';
import Advertising from './Advertising';
import BestSales from './BestSales';
import Newsletter from './NewsLetter';
import './Home.css';

const Home = () => {
		return (
			<div className = "content-wrapper">
				<ShopyHomeSlider />
				<div className="container">
					<Title title="new arrivals" 
								text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
					<ProductsList />
					<LoadMore />
					<Advertising />
					<Title title="best sales" 
									text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
					<BestSales />
					<Newsletter />
				</div>
			</div>
		);
};

export default Home;
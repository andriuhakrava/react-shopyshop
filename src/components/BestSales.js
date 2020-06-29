import React from 'react';
import ProductBestSales from './ProductBestSales';
import './BestSales.css';

class BestSales extends React.Component {
	render(){
		return (
			<div>
				<div className="row">
					<div className = "col-md-4">
						<ProductBestSales />
					</div>
					<div className = "col-md-4">
						<ProductBestSales />
					</div>
					<div className = "col-md-4">
						<ProductBestSales />
					</div>
				</div>
			</div>
		)
	}
}

export default BestSales;
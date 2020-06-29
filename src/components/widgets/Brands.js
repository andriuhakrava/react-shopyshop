import React from 'react';
import './WidgetBar.css';

class Brands extends React.Component {
	render(){
		return (
			<div className="widget-wrapper">
				<h3 className="widget-header">brands</h3>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="brand-reebok" />
					<label for="brand-reebok" className="widget-text">reebok</label>
				</p>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="brand-adidas" />
					<label for="brand-adidas" className="widget-text">adidas</label>
				</p>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="brand-nike" />
					<label for="brand-nike" className="widget-text">nike</label>
				</p>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="brand-active" />
					<label for="brand-active" className="widget-text">active</label>
				</p>
			</div>
		)
	}
}

export default Brands;
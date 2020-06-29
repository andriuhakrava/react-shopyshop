import React from 'react';
import './WidgetBar.css';

class Categories extends React.Component {
	render(){
		return (
			<div className="widget-wrapper">
				<h3 className="widget-header">categories</h3>
				<p className="widget-filter-parameter">
					<span className="widget-text">man</span>
				</p>
				<p className="widget-filter-parameter">
					<span className="widget-text">women</span>
				</p>
				<p className="widget-filter-parameter">
					<span className="widget-text">children</span>
				</p>
				<p className="widget-filter-parameter">
					<span className="widget-text">hot deals</span>
				</p>
			</div>
		)
	}
}

export default Categories;
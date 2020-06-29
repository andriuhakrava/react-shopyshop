import React from 'react';
import './WidgetBar.css';

class Sizes extends React.Component {
	render(){
		return (
			<div className="widget-wrapper">
				<h3 className="widget-header">sizes</h3>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="size-small" />
					<label for="size-small" className="widget-text">small</label>
				</p>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="size-medium" />
					<label for="size-medium" className="widget-text">medium</label>
				</p>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="size-large" />
					<label for="size-large" className="widget-text">large</label>
				</p>
				<p className="widget-filter-parameter">
					<input type="checkbox" id="size-xlarge" />
					<label for="size-xlarge" className="widget-text">x large</label>
				</p>
			</div>
		)
	}
}

export default Sizes;
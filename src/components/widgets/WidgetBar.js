import React from 'react';
import Categories from './Categories';
import PriceFilter from './PriceFilter';
import Sizes from './Sizes';
import Brands from './Brands';
import './WidgetBar.css'

class WidgetBar extends React.Component {
	render(){
		return (
			<div>
				<Categories />
				<PriceFilter />
				<Sizes />
				<Brands />
			</div>
		)
	}
}

export default WidgetBar;
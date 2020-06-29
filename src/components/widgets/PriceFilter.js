import React from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import './WidgetBar.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
const handle = (props) => {
	const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
	);
};

function log(value) {
	const [min, max] = value;
	// console.log(value);
	console.log(min);
}

class PriceFilter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: 'price filter',
			min: 250,
			max: 1000
		}
		this.changeMinPrice = this.changeMinPrice.bind(this);
		this.changeMaxPrice = this.changeMaxPrice.bind(this);
	}
	// changePriceRange(value){
	// 	this.setState({
	// 		min: 
	// 	})
	// }
	changeMinPrice(value){
		this.setState({
			min: value
		});
		console.log(this.state.min);
	}
	changeMaxPrice(value){
		this.setState({
			max: value
		});
		console.log(this.state.max);
	}
	render(){
		return (
			<div className="widget-wrapper">
				<h3 className="widget-header">{this.state.title}</h3>
				<Range min={0} max={1250} step={5} allowCross={false} 
							defaultValue={[this.state.min, this.state.max]}
							tipFormatter={value => `${value}$`} 
							onChange={log} />
				<label for id="minPrice">From</label>
				<input type="text" id="minPrice" onChange={this.changeMinPrice} value={this.state.min}/>
				<label for id="maxPrice">To</label>
				<input type="text" id="maxPrice" onChange={this.changeMaxPrice} value={this.state.max}/>
			</div>
		)
	}
}

export default PriceFilter;
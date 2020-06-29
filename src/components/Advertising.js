import React from 'react';
import './Advertising.css';
import AdvertisingOffer from './AdvertisingOffer';
import AdvertisingArea from './AdvertisingArea';

class Advertising extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-7">
					<AdvertisingOffer />
				</div>
				<div className = "col-md-5 advertising-banner">
					<AdvertisingArea />
				</div>
			</div>
		)
	}
}

export default Advertising;
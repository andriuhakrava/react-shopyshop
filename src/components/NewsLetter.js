import React from 'react';
import './NewsLettter.css';

class NewsLetter extends React.Component {
	render(){
		return (
			<div className ="row newsletter-section">
				<div className="col-md-2">
					<span className="newsletter-header">NEWS LETTER</span>
				</div>
				<div className="col-md-4">
					<p className="newsletter-text">join us now to get all news and special offers</p>
				</div>
				<div className="col-md-3 offset-md-1">
					<a href="/">
					<img src={require('../assets/images/mail-icon.png')} alt="mail-icon"/>
					<span className="mail-link-text">type your email here</span></a>
				</div>
				<div className="col-md-2 btn-registration-wrapper">
					<button className="btn-registration">join us</button>
				</div>
			</div>
		)
	}
}

export default NewsLetter;
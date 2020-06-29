import React from 'react';
import Logo from './Logo';
import './Footer.css';

class Footer extends React.Component {
	render(){
		return (
			<footer>
				<div className="container">
					<div className="row footer-content">
						<div className="col-md-4">
							<Logo />
							<p className="copyright">shopy &copy; 2015. your copyright here</p>
						</div>
						<div className="col-md-6">
							<ul className="footer-menu">
								<div className="footer-menu-part">
									<li><a href="/">about us</a></li>
									<li><a href="/">contact us</a></li>
									<li><a href="/">support</a></li>
								</div>
								<div className="footer-menu-part">
									<li><a href="/">our feed</a></li>
									<li><a href="/">terms and conditions</a></li>
									<li><a href="/">our privacy</a></li>
								</div>
								<div className="footer-menu-part">
									<li><a href="/">join us</a></li>
									<li><a href="/">live support</a></li>
								</div>
							</ul>
						</div>
						<div className="col-md-2">
							<h4 className="payment-header">payment methods</h4>
							<ul className="payment-list">
								<li><a href="/"><img src = {require('../assets/images/payment-amex.png')} alt = "payment-amex" /></a></li>
								<li><a href="/"><img src = {require('../assets/images/payment-khan.png')} alt = "payment-khan" /></a></li>
								<li><a href="/"><img src = {require('../assets/images/payment-visa.png')} alt = "payment-visa" /></a></li>
								<li><a href="/"><img src = {require('../assets/images/payment-mastercard.png')} alt = "payment-mastercard" /></a></li>
								<li><a href="/"><img src = {require('../assets/images/payment-gray.png')} alt = "payment-gray" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;
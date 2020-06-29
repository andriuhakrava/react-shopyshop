import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './Header.css';

class Header extends React.Component {	
	render(){
		return (
			<header>
				<div className = "row-wrap-header">
					<div className="container">
						<div className = "row">
							<div className="col-md-3">
								<div className= "contacts-header">
									<ul className="contacts-header-links">
										<li>
											<a href="/">
												<img src={require('../assets/images/mail-icon.png')} alt="mail-icon" />
												<span className="contacts-header-links-content">info@shopy.com</span>
											</a>
										</li>
										<li>
											<a href="/">
												<img src={require('../assets/images/phone-icon.png')} alt="phone-icon" />
												<span className="contacts-header-links-content">996 - 5553 - 453</span>
											</a>
										</li>
									</ul>
								</div>	
							</div>
							<div className = "col-md-2 offset-md-7">
								<ul className="social-links">
									<li>
										<a href="/" title="shopy in facebook">
											<img src={require('../assets/images/social-facebook.png')} alt="social-facebook"/>
										</a>
									</li>
									<li>
										<a href="/" title="shopy in twitter">
											<img src={require('../assets/images/social-twitter.png')} alt="social-twitter"/>
										</a>
									</li>
									<li>
										<a href="/" title="shopy in googleplus">
											<img src={require('../assets/images/social-googleplus.png')} alt="social-googleplus"/>
										</a>
									</li>
									<li>
										<a href="/" title="shopy in instagram">
											<img src={require('../assets/images/social-instagram.png')} alt="social-instagram"/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row-wrap-header row-wrap-header_main">
					<div className="container">
						<div className = "row">	
							<div className="col-md-2">
								<Logo />
							</div>
							<div className="col-md-5">
								<nav className="header-navigation">
									<Navigation />
								</nav>
							</div>
							<div className="col-md-2 offset-md-3">
								<ul className="user-controls">
									<li><a href="/"><img src={require('../assets/images/search-icon.png')} alt="search-icon"/></a></li>
									<li><a href="/"><img src={require('../assets/images/user-icon.png')} alt="user-icon"/></a></li>
									<li><a href="/"><img src={require('../assets/images/cart-icon.png')} alt="cart-icon"/></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;
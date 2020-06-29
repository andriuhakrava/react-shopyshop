import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<NavLink to="/" exact activeClassName="active">HOME</NavLink>
			<NavLink to="/products" activeClassName="active">Products</NavLink>
			<NavLink to="/hotdeals" activeClassName="active">HotDeals</NavLink>
			<NavLink to="/about" activeClassName="active">About</NavLink>
			<NavLink to="/contact" activeClassName="active">Contact</NavLink>
		</div>
	)
}

export default Navigation;
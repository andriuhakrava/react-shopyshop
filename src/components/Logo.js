import React from 'react';

class Logo extends React.Component {
	render(){
		return (
			<img src = { require('../assets/images/logo.png') } alt="logo" />
		)
	}
} 

export default Logo;
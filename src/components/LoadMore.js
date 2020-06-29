import React from 'react';
import Spinner from 'react-spinkit';
import './LoadMore.css';

class LoadMore extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			loading: false
		};
		this.handleLoadMore = this.handleLoadMore.bind(this);
	}
	handleLoadMore(){
		this.setState({
			loading: true
		});
		setTimeout(() => {
			console.log('API Request!!!');
			this.setState({loading: false});
		}, 3000);
	}
	render(){
		return (
			<div className="loadmore-box" onClick={this.handleLoadMore}>
				{
					this.state.loading ?
						<Spinner name="ball-beat" color="#ff5912" /> : 
						<div className="loadmore-box-text">Load More</div>
				}
			</div>
		)
	}
}

export default LoadMore;
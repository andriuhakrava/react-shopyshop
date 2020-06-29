import React from 'react';
import './Title.css';

class Title extends React.Component {
	constructor(props){
		super(props);
		this.title = this.props.title.split(' ');
		this.titleFirstWord = this.titleFirstWord.bind(this);
		this.titleSecondWord = this.titleSecondWord.bind(this);
	}
	titleFirstWord(){
		return this.title[0];
	}
	titleSecondWord(){
		return this.title[1];
	}
	render(){
		return (
			<div className="row">
				<div className="col-md-6 offset-md-3 section-title">
					<h2 className="section-header">
						<span>{this.titleFirstWord()} </span> 
						{this.titleSecondWord()}</h2>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

export default Title;
import React from 'react';

class Store extends React.Component {

	constructor() {
		super();

		this.disableButton = this.disableButton.bind(this);
		this.handleClick = this.handleClick.bind(this);
	
		this.state = {
			disabled: ''
		}
	}

	handleClick() {
		this.props.buy(69,5);
		this.disableButton();
		console.log('clicked');
		// console.log()
	}

	disableButton() {
		this.setState({
			disabled: 'disabled'
		});
	}

	render() {
		return (
			<div className="Store">
	          	<h3>Items</h3>

		         	<ul className="store__items">
		            	<li className="store__item">
		              	<button className="store__item__button" onClick={() => this.handleClick() } disabled={this.state.disabled}>Buy 2x (5 units)</button>
		            	</li>
		          	</ul>
        	</div>
		)
	}
}

export default Store;
import React from 'react';

class Item extends React.Component {
	constructor() {
		super();
		
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			disabled: 'disabled'
		}
	}

	componentDidMount() {
		// this.checkBank();	
	}


	handleClick(item, cost) {
		this.props.buy(item, cost);
	}

	render() {
		return (
			<button disabled={ this.props.bank >= this.props.cost ? `` : `disabled`} onClick={(e) => this.handleClick(2,this.props.cost)}>Buy {this.props.name} for {this.props.cost}</button>
		)
	}
}

export default Item;
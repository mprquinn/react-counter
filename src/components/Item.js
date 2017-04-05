import React from 'react';
import { Button } from 'react-bootstrap'

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


	handleClick(item, cost, name) {
		this.props.buy(item, cost, name);
	}

	render() {
		return (
			<Button disabled={ this.props.bank >= this.props.cost ? `` : `disabled`} onClick={(e) => this.handleClick(this.props.mult,this.props.cost,this.props.name)}>Buy {this.props.name} for {this.props.cost}</Button>
		)
	}
}

export default Item;
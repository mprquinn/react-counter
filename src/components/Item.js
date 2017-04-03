import React from 'react';

class Item extends React.Component {
	constructor() {
		super();

		this.disable = this.disable.bind(this);
		this.checkBank = this.checkBank.bind(this);
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			disabled: 'disabled'
		}
	}

	componentDidMount() {
		this.checkBank();	
	}

	componentWillUpdate() {
		this.checkBank();
	}

	checkBank() {
		if(this.props.bank === this.props.cost-1){
			this.setState({
				disabled: ''
			})
		}
	}

	disable() {
		this.setState({
			disabled: 'disabled'
		});
	}

	handleClick(item, cost) {
		this.props.buy(item, cost);
		this.disable();
	}

	render() {
		return (
			<button disabled={this.state.disabled} onClick={(e) => this.handleClick(2,this.props.cost)}>Buy {this.props.name} for {this.props.cost}</button>
		)
	}
}

export default Item;
import React from 'react';

class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
	          <h3>
	            <span>{this.props.units} 😎</span>
	          </h3>

	          <progress value={this.props.cleanNumber} max="1000000000"></progress>

	        </div>
		)
	}
}

export default Counter;
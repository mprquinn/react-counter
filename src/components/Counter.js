import React from 'react';

class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
	          <h3>
	            Current units: <span>{this.props.units}</span>
	          </h3>

	          <progress value={this.props.units} max="10000"></progress>

	        </div>
		)
	}
}

export default Counter;
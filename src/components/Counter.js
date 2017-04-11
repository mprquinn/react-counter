import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class Counter extends React.Component {
	render() {
		return (
			<div className="counter">
	          <h3>
	            <span>
	            	<CSSTransitionGroup className="unit" transitionName="unit" transitionEnterTimeout={100} transitionLeaveTimeout={100}>
	            		<span key={this.props.units}>{this.props.units} 😎</span>
	            	</CSSTransitionGroup>
	            </span>
	          </h3>

	          <progress value={this.props.cleanNumber} max="1000000000"></progress>

	        </div>
		)
	}
}

export default Counter;
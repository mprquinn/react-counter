import React from 'react';
import { toHHMMSS } from '../helpers';
import base from '../base';
import { Well } from 'react-bootstrap';

class Win extends React.Component {

	constructor() {
		super();

		// this.submitScore = this.submitScore.bind(this);

	}

	submitScore(event) {
		event.preventDefault();
		const entry = {
			name: this.name.value,
			score: this.props.timer
		};
		const timestamp = Date.now();
		// console.log(entry);
		console.log(base.database());

		base.database().ref(timestamp).set({
			name: entry.name,
			score: entry.score
		});
	}

	render() {
		return (
			<div>
				<div className={"win__modal " + this.props.won}>
		        </div>
		        <div className={"win " + this.props.won}>
		          <h3 className="win__title">Congratulations, you have more than one billion beautiful 😎.</h3>
		          <p>It took you {toHHMMSS(this.props.timer)} to win.</p>
		          <p>Share on <a href={"https://twitter.com/home?status=It%20took%20me%20"+toHHMMSS(this.props.timer)+"%20to%20click%20the%20big,%20beautiful%20button%20one%20billion%20times%20%40%20http%3A//mikequinn.online"} className="btn btn-success">Twitter</a></p>
		          <Well>
			          <form ref={(input) => this.scoreForm = input} onSubmit={this.submitScore.bind(this)}>
			        	<p><strong>Submit your Score:</strong></p>
			        	<p>
			        		<input ref={(input) => this.name = input} type="text" placeholder="Your Name" name="name" /></p>
			        	<button className="btn btn-success">Register Score</button>
			          </form>
		          </Well>
		        </div>


	        </div>
		)
	}
}

export default Win;
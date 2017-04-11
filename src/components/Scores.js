import React from 'react';
import { toHHMMSS } from '../helpers';
import base from '../base';

import { Well } from 'react-bootstrap';

class Scores extends React.Component {
	constructor() {
		super();
		
		this.loadScores = this.loadScores.bind(this);

		this.state = {
			status: 'loading',
			scores: []
		}
	}

	loadScores() {
		var db = base.database();
		const scoresRef = db.ref('scores');

		var scores = this.state.scores;

		scoresRef.orderByChild('score').on('value', (data) => {
			data.forEach((data) => {
				scores.push(data.val());
				this.setState({
					scores
				});
			});
		});
		
	}

	getInitialState() {
		// this.loadScores();
		return {scores: '..loading' }
	}

	componentDidMount() {
		this.loadScores();
	}

	render() {
		return (
			<div className="scores">

				<Well>
					<h3>Top Scores:</h3>
					<ul className="scores__list">
						{
							Object.keys(this.state.scores).map(key => <li key={key}>{this.state.scores[key].name}: {toHHMMSS(this.state.scores[key].score)}</li>)
						}
					</ul>
				</Well>
			</div>
		)
	}
}

export default Scores;
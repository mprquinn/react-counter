import React from 'react';
import { toHHMMSS } from '../helpers';
import base from '../base';

import { Well } from 'react-bootstrap';

class Scores extends React.Component {
	constructor() {
		super();
		
		this.loadScores = this.loadScores.bind(this);

		this.state = {
			topScores: {},
			scores: []
		}
	}

	loadScores() {
		var db = base.database();
		const scoresRef = db.ref('scores');
		var scores = this.state.scores
		scoresRef.orderByChild('score').on('value', (data) => {
			data.forEach((data) => {
				console.log(data.val());
				this.setState({
					scores: scores.push(data.val())
				});
			});
		});
		
	}

	componentDidMount() {
		this.loadScores();
		console.log(this.state.scores)
	}	

	render() {
		return (
			<div className="scores">
				<Well>
					<h3>Top Scores:</h3>
					<ul className="scores__list">
						<li className="score__item">Test</li>
					</ul>
				</Well>
			</div>
		)
	}
}

export default Scores;
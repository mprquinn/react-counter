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
		const scores = db.ref();
		var topScores = [];
		scores.on('value', function(snapshot) {
			var scores = snapshot.val();
			
			for (var key in scores) {
				topScores.push(scores[key]);
			}

			this.setState({
				scores: topScores
			});
		})

		// console.log(this.state.scores);
		
	}

	componentDidMount() {
		this.loadScores();
		console.log(this.state);
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
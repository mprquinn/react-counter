import React from 'react';
import { toHHMMSS } from '../helpers';

class Win extends React.Component {
	render() {
		return (
			<div>
				<div className={"win__modal " + this.props.won}>
		        </div>
		        <div className={"win " + this.props.won}>
		          <h1 className="win__title">Congratulations, you clicked that big, beautiful button one million times.</h1>
		          <p>It took you {toHHMMSS(this.props.timer)} to win.</p>
		          <p>Share on <a href={"https://twitter.com/home?status=It%20took%20me%20"+toHHMMSS(this.props.timer)+"%20to%20click%20the%20big,%20beautiful%20button%20one%20million%20times%20%40%20http%3A//mikequinn.online"} className="btn btn-success">Twitter</a></p>
		        </div>
	        </div>
		)
	}
}

export default Win;
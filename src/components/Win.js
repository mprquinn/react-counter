import React from 'react';

class Win extends React.Component {
	render() {
		return (
			<div>
				<div className={"win__modal " + this.props.won}>
		        </div>
		        <div className={"win " + this.props.won}>
		          <h1 className="win__title">You've Won!</h1>
		          <p>It took you {this.props.timer}s to win.</p>
		          <p>Share on <a href={"https://twitter.com/home?status=It%20took%20me%20"+this.props.timer+"s%20to%20win%20on%20http%3A//mikequinn.online"} className="btn btn-success">Twitter</a></p>
		        </div>
	        </div>
		)
	}
}

export default Win;